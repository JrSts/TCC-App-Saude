import { View, SafeAreaView, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import Input from '../../Components/Input'
import ButtonAddPaciente from '../../Components/ButtonAddPaciente'
import THEME from '../../THEME'
import { FontAwesome, FontAwesome5} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'
import Firestore from '@react-native-firebase/firestore'
import { printToFileAsync } from 'expo-print'
import { shareAsync }from 'expo-sharing'


export default function MeusPacientes() {

  const [pacienteCadastrado, setPacienteCadastrado] = useState([])
  const [loading, setLoading] = useState(false)
  const [idade, setIdade] = useState(0)
  const [idPaciente, setIdPaciente] = useState('')
  const [idProfissional, setIdProfissional] = useState('')
  const [profissional, setProfissional] = useState({})
  const [paciente, setPaciente] = useState({})
  const [matriz, setMatriz] = useState([])
  const [alarme, setAlarme] = useState('')
  const [seconds, setSeconds] = useState()

  const [turnos, setTurnos] = useState([])
  const [diasDaSemana, setDiasDaSemana] = useState([])

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const hoje = new Date().seconds 

  function gerarVetorConcatenado(){
    let list = []
    for (let i = 0; i < diasDaSemana.length; i++) {
      for (let j = 0; j < turnos.length; j++) {
        list.push(`${diasDaSemana[i]}${turnos[j]}`)
      }
    }
    setMatriz(list)
  }

  useEffect(() => {
    const subscriber = Firestore().collection('Atividades')
    .onSnapshot(querySnapshot => {
      querySnapshot.docs.map(doc => {
          setSeconds(doc.data().alarme.seconds)
          setDiasDaSemana(doc.data().diasDaSemana)
          setTurnos(doc.data().turnos)
        })
      })
      gerarVetorConcatenado()
    return () => subscriber()
  }, [])

  const user = Auth().currentUser.uid

  function ItemPaciente({item}) {
    const navigation = useNavigation()
    return (
      <View style={styles.containerTask}>
        <TouchableOpacity onPress={() => {navigation.navigate('PerfilPaciente' , {id: item.id})}}>
          <FontAwesome name='user-circle-o' size={50} style={styles.avatar}/>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('AtividadesProfissional', {id: item.id})}
          >
              <View>
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.idade}>{idade} Anos</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttomDownload} onPress={() => gerarRelatorio()}> 
            <FontAwesome5 name='file-download' size={45} style={styles.avatar}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const html = `
  <html>
<body>
  <h6 style='display:flex; justify-content: flex-end; font-weight: normal'>
    Gerado em 11/03/2023
  </h6>
  
  <h1 style='display: flex; align-items: center;justify-content: center;'>
    Relatório TaskFono
  </h1>

  <table width="100%" border style='margin-top: 15px;
    margin-bottom: 15px;' >
    <tr>
      <td width='50%'>
        <h5 style='margin: 5px'>Nome: 
          <span style='font-weight: normal;'>${profissional.nome}</span>
        </h5>
        <h5 style='margin: 5px'>CRFono: 
          <span style='font-weight: normal;'>${profissional.CRFono}</span>
        </h5>
      </td>
      <td>
        <h5 style='margin: 5px'>E-mail: 
          <span style='font-weight: normal;'>${profissional.email}</span>
        </h5>
        <h5 style='margin: 5px'>Telefone: 
          <span style='font-weight: normal;'>${profissional.phone}</span>
        </h5>
      </td>
    </tr>
  </table>

  <h3 style=' display: flex; align-items: center;justify-content: center;'>
    Informações do Paciente
  </h3>

  <table border width="100%" style=' margin-top: 15px; margin-bottom: 15px;' >
    <tr>
      <td width='50%'>
        <h6 style='margin: 5px'>Nome: 
          <span style='font-weight: normal;'>${paciente.nome}</span>
        </h6>
        <h6 style='margin: 5px'>Apelido: 
          <span style='font-weight: normal;'>${paciente.apelido}</span>
        </h6>
        <h6 style='margin: 5px'>Telefone: 
          <span style='font-weight: normal;'>${paciente.phone}</span>
        </h6>
      </td>
      <td>
        <h6 style='margin: 5px'>Data de Nascimento: 
          <span style='font-weight: normal;'>${paciente.dataNascimento}</span>
        </h6>
        <h6 style='margin: 5px'>Hipótese Diagnóstica: 
          <span style='font-weight: normal;'>${paciente.hipotese}</span>
        </h6>
        <h6 style='margin: 5px'>E-mail: 
          <span style='font-weight: normal;'>${paciente.email}</span>
        </h6>
      </td>
    </tr>
  </table>

  <h3 style=' display: flex; align-items: center; justify-content: center;'>
    Informações do Aplicativo
  </h3>
  <table border width="100%" style=' margin-top: 15px; margin-bottom: 15px;' >
    <tr>
      <td>
        <h6 style='margin: 5px'>Lembrete:
          <span style='font-weight: normal;'>
            ${paciente.lembrete}
          </span>
        </h6>
      </td>
    </tr>
    <tr>
      <td>
        <h6 style='margin: 5px'>Anotações:
          <span style='font-weight: normal;'>
            ${paciente.anotacoes}
          </span>
        </h6>
      </td>
    </tr>
  </table>

  <h3 style=' display: flex; align-items: center; justify-content: center;'>
    Atividades
  </h3>

  <h6 class="content">Nome: 
    <span style='font-weight: normal;'>Atividade 01</span>
  </h6>
  <h6 class="content">Descrição: 
    <span style='font-weight: normal;'>Descrição da atividade 01</span>
  </h6>

  <table style=' margin-top: 15px; margin-bottom: 15px;' border='1' width='100%'>
    <tr style='text-align: center;'>
      <td>
        <h6>Dias/Turno</h6>
      </td>
      <td>
        <h6>Segunda</h6>
      </td>
      <td>
        <h6>Terça</h6>
      </td>
      <td>
        <h6>Sexta</h6>
      </td>
    </tr>
    <tr>
      <th rowspan='3'>
        <h6>Manhã</h6>
      </th>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
  <tr>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
      </td>
    </tr>
    <tr>
      <td>
         <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
    </tr>
  </table>

  <h6>Nome: <span style='font-weight: normal'>Atividade 02</span></h6>
  <h6>Descrição: <span style='font-weight: normal;'>Descrição da atividade 02</span></h6>

  <table border='1' width='100%' style=' margin-top: 15px; margin-bottom: 15px;' >
    <tr style='text-align: center;'>
      <td>
        <h6>Dias/Turno</h6>
      </td>
      <td>
        <h6>Domingo</h6>
      </td>
      <td>
        <h6>Terça</h6>
      </td>
      <td>
        <h6>Quinta</h6>
      </td>
      <td>
        <h6>Sábado</h6>
      </td>
    </tr>
    <tr>
      <th rowspan='3'>
          <h6>Tarde</h6>
      </th>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>                             
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
    <tr>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
      </td>
    </tr>
    <tr>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
    </tr>

    <tr>
      <th rowspan='3'>
        <h6>Noite</h6>
      </th>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Nota</h6>
      </td>
    <tr>
        <td>
          <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
        </td>
        <td>
          <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
        </td>
        <td>
          <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
        </td>
        <td>
          <h6 style='font-weight: normal; margin-left: 5px'>Horário</h6>
        </td>
    </tr>
    <tr>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
      <td>
        <h6 style='font-weight: normal; margin-left: 5px'>Observação</h6>
      </td>
    </tr>
  </table>
</body>
</html>
  `

  async function gerarRelatorio() {
    try {
      const file = await printToFileAsync({
        html: html,
        base64: false,
      })

      await shareAsync(file.uri)

    } catch (error) {
      console.log("Erro ao gerar o relatorio", error)
    }
  }

  function getIdade(nascimento){
    let anoString = nascimento.substring(6,10)
    let mesString = nascimento.substring(3,5)
    let diaString = nascimento.substring(0,2)
    let data = anoString+'-'+mesString+'-'+diaString

    let teste = new Date(data)

    const ano = teste.getFullYear()
    const mes = teste.getMonth()
    const dia = teste.getDate()

    const today = new Date()
    
    if (today.getMonth() <= mes) {
      setIdade(today.getFullYear() - ano - 1)
    } else if (today.getDate() < dia) {
      setIdade(today.getFullYear() - ano - 1)
    } else {
      setIdade(today.getFullYear() - ano)
    }
    return idade
  }

  useEffect(() => {
    Firestore()
    .collection('Profissional')
    .where('id','==', user)
    .onSnapshot(query => {
      query.docs.map(doc => {
        if (doc.data().id == user){
          setIdProfissional(doc.id)
          setProfissional({
            nome: doc.data().nome,
            email: doc.data().email,
            phone: doc.data().phone,
            CRFono: doc.data().CRFono
          })
        }
      })
    }, [])

    const subscriber = Firestore()
      .collection('Pacientes')
      .where('idProfissional', '==', idProfissional)
      .onSnapshot(query => {
        const data = query.docs.map(doc => {
          getIdade(doc.data().dataNascimento)
          setIdPaciente(doc.id)
          setPaciente({
            nome: doc.data().nome,
            email: doc.data().email,
            phone: doc.data().phone,
            apelido: doc.data().apelido,
            dataNascimento: doc.data().dataNascimento,
            hipotese: doc.data().hipotese,
            lembrete: doc.data().lembrete,
            anotacoes: doc.data().anotacoes,
          })
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setPacienteCadastrado(data)
      }) 
    return () => subscriber();
  }, [idProfissional]);

  


  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title="Pacientes"/>
      <View style={styles.content}>
        <Input title='Meus Pacientes'/>
          <View>
            { loading ? <ActivityIndicator color={THEME.COLORS.BUTTON} style={{marginTop: 230}}/> : 
              <FlatList 
              data={pacienteCadastrado}
              renderItem={({item}) => {return <ItemPaciente item={item} />}}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
            }
          </View>
      </View>
      <ButtonAddPaciente />
    </SafeAreaView>
  )
}