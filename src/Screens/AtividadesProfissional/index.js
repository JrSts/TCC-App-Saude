import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import AtividadeProfissional from '../../Components/AtividadeProfissional'
import ButtonsAtividadesLembretes from '../../Components/ButtonsAtividadesLembretes'
import THEME from '../../THEME'
import Icon from '@expo/vector-icons/FontAwesome5'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import Firestore from '@react-native-firebase/firestore'

export default function AtividadesProfissional({route}) {

  const [idPaciente, setIdPaciente] = useState('')
  const [paciente, setPaciente] = useState([])

  const [idProfissional, setIdProfissional] = useState('')
  const [profissional, setProfissional] = useState('')
  
  const [idTask, setIdTask] = useState([])

  const [respostas, setRespostas] = useState([])

  const [atividade, setAtividade] = useState([])

  const [loading, setLoading] = useState(true)
  const uidPaciente = route.params.id

  function formatDigit(num){
    if (num < 10) 
      return '0' + num
    return num
  }

  function formatDataAtual(data) {
    let string = formatDigit(data.getDate())+ '/' + formatDigit(data.getMonth()) + '/' + data.getFullYear()
    return string
  }

  function formatHora(date){
    return date.getHours() + ' : ' + date.getMinutes()
  }

  function ordenarLista(lista){

    let vetor = lista

    for (let i = 0; i < vetor.length; i++){
        switch (vetor[i].diaDaSemana) {
            case 'Domingo' :
                vetor[i].diaDaSemana = 0;
                break;
            case 'Segunda' :
                vetor[i].diaDaSemana = 1;
                break;
            case 'Terça' :
                vetor[i].diaDaSemana = 2;
                break;
            case 'Quarta' :
                vetor[i].diaDaSemana = 3;
                break;
            case 'Quinta' :
                vetor[i].diaDaSemana = 4;
                break;
            case 'Sexta' :
                vetor[i].diaDaSemana = 5;
                break;
            case 'Sábado' :
                vetor[i].diaDaSemana = 6;
                break;
        }
        switch (vetor[i].turno) {
            case  'Manhã':
                vetor[i].turno = 0;
                break;
            case  'Tarde':
                vetor[i].turno = 1;
                break;
            case  'Noite':
                vetor[i].turno = 2;
                break;
        }
    }

    let vetorOrdenado = vetor.sort((a, b) => 
      a.diaDaSemana > b.diaDaSemana ? 1 : a.diaDaSemana < b.diaDaSemana ? -1 : 0
    )

    for (let i = 0; i < vetorOrdenado.length; i++){
        switch (vetorOrdenado[i].diaDaSemana) {
            case 0 :
                vetorOrdenado[i].diaDaSemana = 'Domingo'
                break
            case 1 :
                vetorOrdenado[i].diaDaSemana = 'Segunda'
                break
            case 2 :
                vetorOrdenado[i].diaDaSemana = 'Terça'
                break
            case 3 :
                vetorOrdenado[i].diaDaSemana = 'Quarta'
                break
            case 4 :
                vetorOrdenado[i].diaDaSemana = 'Quinta'
                break
            case 5:
                vetorOrdenado[i].diaDaSemana = 'Sexta'
                break
            case 6 :
                vetorOrdenado[i].diaDaSemana = 'Sábado'
                break
        }
        switch (vetorOrdenado[i].turno){
            case 0:
                vetorOrdenado[i].turno = 'Manhã'
                break
            case 1:
                vetorOrdenado[i].turno = 'Tarde'
                break
            case 2:
                vetorOrdenado[i].turno = 'Noite'
                break
        }
    }
    return vetorOrdenado
  }

  useEffect(() => {
    let aux = []
    const subscriber = Firestore().collection('Respostas')
    .onSnapshot(query => query.docs.map(doc => {
      for (let i = 0; i < idTask.length; i++) {
        if (doc.data().idAtividade == idTask[i]) {
          aux.push({
            id: doc.id,
            idAtividade: doc.data().idAtividade,
            horario: doc.data().horario,
            observacao: doc.data().observacao,
            avaliacao: doc.data().avaliacao,
            diaDaSemana: doc.data().diaDaSemana,
            turno: doc.data().turno

          })
        }
        let auxOrdenado = ordenarLista(aux)
        setRespostas(auxOrdenado)
      }
    }))
    return () => subscriber()
  }, [idTask])
  

  useEffect(() => {
    const subscriber = 
      Firestore()
      .collection('Pacientes')
      .where('id','==', uidPaciente)
      .onSnapshot(query => {
        const data = query.docs.map(doc => {
          setIdPaciente(doc.id)
          setIdProfissional(doc.data().idProfissional)
          setPaciente({
            nome: doc.data().nome,
            dataNascimento: doc.data().dataNascimento,
            phone: doc.data().phone,
            email: doc.data().email,
            hipotese: doc.data().hipotese,
            lembrete: doc.data().lembrete,
            anotacoes: doc.data().anotacoes,
            apelido: doc.data().apelido,
          })
          return {
            id: doc.id,
            ...doc.data()
          }
        })
      })
      return () => subscriber()
  }, [uidPaciente])

  useEffect(() => {
    const subscriber = Firestore().collection('Profissional')
    .onSnapshot(query => query.docs.map(doc => {
      if(doc.id == idProfissional) {
        setProfissional({
          nome: doc.data().nome,
          phone: doc.data().phone,
          CRFono: doc.data().CRFono,
          email: doc.data().email,
        })
      }
    }))
    return () => subscriber()
  }, [idProfissional])

  useEffect(() => {
    let aux = []
    setLoading(true)
    const subscriber = Firestore()
      .collection('Atividades')
      .where('idPaciente','==', idPaciente)
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          aux.push(doc.id)
          return {
            id: doc.id,
            ...doc.data()
          } 
        });
        setIdTask(aux)
        setAtividade(data)
        setLoading(false)
      })
    return () => subscriber();
  }, [idPaciente]);


  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title="Atividades"/>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => gerarRelatorio()}>
          <Icon 
            name='file-download'
            size={40}
            style={styles.img}
            color= {THEME.COLORS.BUTTON}
          />
        </TouchableOpacity>

        <FlatList
          data={atividade}
          renderItem={(({item}) => {
             return <AtividadeProfissional 
              item={item}
            />
            }
          )}
          keyExtrator={(item) => item.id}
        />
        <ButtonsAtividadesLembretes idPaciente={idPaciente}/>
      </View>
    </SafeAreaView>
  )

  async function gerarRelatorio() {

    function criarBody(ativid) {
      let body = ''
  
      let lista = respostas.filter(resposta => resposta.idAtividade == ativid.id)
  
      for (let i = 0; i < lista.length; i++) {
        body += `
        <tr>
          <th rowspan='3'>
            ${lista[i].diaDaSemana} de ${lista[i].turno}
          </th>
          <td style='padding-left:10px; padding-top:5px; padding-bottom:5px;'>
            ${lista[i].horario == '' ? 'SEM REGISTRO DE HORÁRIO' 
            : formatDataAtual(lista[i].horario.toDate()) + ' às ' + formatHora(lista[i].horario.toDate())
          }
          </td>
        </tr>
        <tr>
          <td style='padding-left:10px; padding-top:5px; padding-bottom:5px;'>${lista[i].observacao == '' ? 'SEM REGISTRO DE OBSERVAÇÃO' : lista[i].observacao}</td>
        </tr>
        <tr>
          <td style='padding-left:10px; padding-top:5px; padding-bottom:5px;'>${lista[i].avaliacao == '' ? 'SEM REGISTRO DE AVALIAÇÃO' : lista[i].avaliacao}</td>
        </tr>
        `
      }
      return body
    }

    function renderizarAtividade(ativid) {
      let rendertask =  ''
      for (let i = 0; i < ativid.length; i++) {

        rendertask += `

        <table width="100%" style=' margin-top: 15px; margin-bottom: 15px;' >
        <tr>
          <td>
            <h5 style='margin: 5px'>Nome:
              <span style='font-weight: normal;'>
                ${ativid[i].nome}
              </span>
            </h5>
          </td>
        </tr>
        <tr>
          <td> 
            <h5 style='margin: 5px'>Descrição:
              <span style='font-weight: normal;'>
                ${ativid[i].descricao}
              </span>
            </h5>
          </td>
        </tr>
      </table>
    
        <table style=' margin-top: 15px; margin-bottom: 15px;' border='1' width='100%'>
          ${criarBody(ativid[i])}
        </table>`
      }
      return rendertask
    }

    const html = `
    <html>
    <body>
      <h5 style='display:flex; justify-content: flex-end; font-weight: normal'>
        Gerado em ${formatDataAtual(new Date(Date.now()))}
      </h5>

      <h1 style=' display: flex; align-items: center; justify-content: center;'>
        Relatório TaskFono
      </h1>

      <table width="100%"  style='margin-top: 15px;
        margin-bottom: 15px;' >
        <tr>
          <td width='50%'>
            <h5 style='margin: 5px'>Profissional: 
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

      <h3 style=' display: flex; align-items: center; justify-content: center;'>
        Informações do Paciente
      </h3>

      <table width="100%" style=' margin-top: 15px; margin-bottom: 15px;' >
        <tr>
          <td width='50%'>
            <h5 style='margin: 5px'>Nome: 
              <span style='font-weight: normal;'>${paciente.nome}</span>
            </h5>
            <h5 style='margin: 5px'>Apelido: 
              <span style='font-weight: normal;'>${paciente.apelido}</span>
            </h5>
            <h5 style='margin: 5px'>Telefone: 
              <span style='font-weight: normal;'>${paciente.phone}</span>
            </h5>
          </td>
          <td>
            <h5 style='margin: 5px'>Data de Nascimento: 
              <span style='font-weight: normal;'>${paciente.dataNascimento}</span>
            </h5>
            <h5 style='margin: 5px'>Hipótese Diagnóstica: 
              <span style='font-weight: normal;'>${paciente.hipotese}</span>
            </h5>
            <h5 style='margin: 5px'>E-mail: 
              <span style='font-weight: normal;'>${paciente.email}</span>
            </h5>
          </td>
        </tr>
      </table>

      <h3 style=' display: flex; align-items: center; justify-content: center;'>
        Informações do Aplicativo
      </h3>
      <table width="100%" style=' margin-top: 15px; margin-bottom: 15px;' >
        <tr>
          <td>
            <h5 style='margin: 5px'>Lembrete:
              <span style='font-weight: normal;'>
                ${paciente.lembrete}
              </span>
            </h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5 style='margin: 5px'>Anotações:
              <span style='font-weight: normal;'>
              ${paciente.anotacoes}
              </span>
            </h5>
          </td>
        </tr>
      </table>

      <h3 style=' display: flex; align-items: center; justify-content: center;'>
        Atividades
      </h3>

      ${renderizarAtividade(atividade)}
     
    </body>
  </html>
  `

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
}