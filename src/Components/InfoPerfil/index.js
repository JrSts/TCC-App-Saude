import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import {FontAwesome, SimpleLineIcons} from '@expo/vector-icons'
import Auth from '@react-native-firebase/auth'
import Firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native'
import Load from '../Load'
import THEME from '../../THEME'

export default function InfoPerfil() {

  const [isPaciente, setIsPaciente] = useState(false)
  const [data, setData] = useState({})
  const [idade, setIdade] = useState(0)
  const [id, setId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const currentUser = Auth().currentUser.uid

  const navigation = useNavigation()

  function signOut() {
    <Load color={THEME.COLORS.BUTTON}/>
    Auth().signOut()
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
    setIsLoading(true)
    const subscriber = Firestore().collection('Profissional')
      .onSnapshot((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          if (doc.data().id == currentUser){
            setIsPaciente(false)
            setId(doc.id)
            setData(doc.data())
            getIdade(doc.data().dataNascimento)
            return data
          }
        })
        setIsLoading(false)
      })
    return () => subscriber()
  })

  useEffect(() => {
    setIsLoading(true)
    const subscriber = Firestore().collection("Pacientes")
    .onSnapshot((querySnapshot =>  {
      querySnapshot.docs.map((doc) => {
        if (doc.data().id == currentUser){
          setIsPaciente(true)
          setId(doc.id)
          setData(doc.data())
          return data
        } 
      })
      setIsLoading(false)
    }))
    return () => subscriber()
  })
 

  return (
    <View style={styles.container}>
      <View style={styles.containerButtons}>
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={() => {navigation.navigate('AtualizarPerfil', {id: id})}}
        >
          <FontAwesome name='pencil' size={30} style={styles.edit}/>
        </TouchableOpacity>
        <TouchableOpacity tyle={styles.logoutButton} onPress={() => {signOut()}}>
          <SimpleLineIcons name='logout' size={30} style={styles.edit} />
        </TouchableOpacity>
      </View>
      <FontAwesome name='user-circle-o' style={styles.img} size={200}/>
      { isPaciente ? 
        <View>
          <Text style={styles.name}>{data.nome}</Text>
          <Text style={styles.desc}>idade {getIdade(doc.data().dataNascimento)} anos</Text>
          <Text style={styles.desc}>Hipótese {data.hipotese}</Text>
          <Text style={styles.desc}>Celular {data.phone}</Text>
          <Text style={styles.desc}>E-mail {data.email}</Text>
        </View>
      :
        <View>
          <Text style={styles.name}>{data.nome}</Text>
          <Text style={styles.desc}>Fonoaudiólogo(a)</Text>
          <Text style={styles.desc}>CRFono {data.CRFono}</Text>
          <Text style={styles.desc}>Celular {data.phone}</Text>
          <Text style={styles.desc}>E-mail {data.email}</Text>
        </View>
      }
    </View>
  )
}


      