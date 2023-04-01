import { View, SafeAreaView, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import Input from '../../Components/Input'
import ButtonAddPaciente from '../../Components/ButtonAddPaciente'
import THEME from '../../THEME'
import { FontAwesome, FontAwesome5} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'
import Firestore from '@react-native-firebase/firestore'

export default function MeusPacientes() {

  const [pacienteCadastrado, setPacienteCadastrado] = useState([])
  const [loading, setLoading] = useState(false)
  const [idade, setIdade] = useState(0)
  const [idPaciente, setIdPaciente] = useState('')
  const [idProfissional, setIdProfissional] = useState('')

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
          <TouchableOpacity style={styles.buttomDownload}> 
            <FontAwesome5 name='file-download' size={45} style={styles.avatar}/>
          </TouchableOpacity>
        </View>
      </View>
    )
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