import { View, SafeAreaView, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, Modal, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import Input from '../../Components/Input'
import Firestore from '@react-native-firebase/firestore'
import THEME from '../../THEME'
import { FontAwesome, FontAwesome5} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'

export default function ListarPacientes() {
  const [pacienteNaoCadastrado, setPacienteNaoCadastrado] = useState([])
  const [loading, setLoading] = useState(true)
  const [idade, setIdade] = useState(0)
  const [idPaciente, setIdPaciente] = useState('')
  const [idProfissional, setIdProfissional] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const user = Auth().currentUser.uid

  useEffect(() => {
    const subscriber = Firestore()
      .collection('Profissional')
      .where('id', '==', user)
      .onSnapshot(query => query.docs.map(doc => {
        setIdProfissional(doc.id)
      }))
      return () => subscriber()
  }, [])

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
    let idade = 0
    if (today.getMonth() <= mes) {
      idade = today.getFullYear() - ano - 1
    } else if (today.getDate() < dia) {
      idade = today.getFullYear() - ano - 1
    } else {
      idade = today.getFullYear() - ano
    }
    return idade
  }

  useEffect(() => {
    setLoading(true)
    const subscriber = Firestore()
      .collection('Pacientes')
      .where('idProfissional','==','')
      .onSnapshot(query => {
        const data = query.docs.map(doc => {
          setIdPaciente(doc.id)
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setPacienteNaoCadastrado(data)
        setLoading(false)
      }) 
      
    return () => subscriber();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title="Pacientes"/>
      <View style={styles.content}>
        <Input title='Buscar Pacientes'/>
          <View>
            { loading ? <ActivityIndicator color={THEME.COLORS.BUTTON} style={{marginTop: 230}}/> : 
              <FlatList 
                data={pacienteNaoCadastrado}
                renderItem={({item}) => {return <ItemPaciente item={item} />}}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            }
          </View>
      </View>
    </SafeAreaView>
  )

  function ItemPaciente({item}) {
    const navigation = useNavigation()
    return (
      <View style={styles.containerTask}>
        <TouchableOpacity onPress={() => Alert.alert('Atenção!', 'Adicione o paciente para ter acesso aos demais dados pessoais dele.')}>
          <FontAwesome name='user-circle-o' size={50} style={styles.avatar}/>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <TouchableOpacity 
            onPress={() => Alert.alert('Atenção!', 'Adicione o paciente para ter acesso aos demais dados pessoais dele.')}
          >
              <View>
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.idade}>{getIdade(item.dataNascimento)} Anos</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addser} onPress={() => navigation.navigate('ValidarCodigo', {id: item.id})}> 
            <FontAwesome5 name='user-plus' size={45} style={styles.avatar}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}