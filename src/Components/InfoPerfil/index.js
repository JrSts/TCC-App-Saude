import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import {FontAwesome, SimpleLineIcons} from '@expo/vector-icons'
import Auth from '@react-native-firebase/auth'
import Firestore from "@react-native-firebase/firestore"

export default function InfoPerfil() {

  const [isPaciente, setIsPaciente] = useState(false)
  const [data, setData] = useState({})
  const [idade, setIdade] = useState(0)

  const currentUser = Auth().currentUser.uid

  function signOut() {
    Auth().signOut()
    setIsPaciente(null)
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
    const subscriber = Firestore().collection('Profissional')
      .onSnapshot((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          if (doc.data().id == currentUser){
            setIsPaciente(false)
            setData(doc.data())
            getIdade(doc.data().dataNascimento)
            return data
          }
        })
      })
    return () => subscriber()
  }, [])

  useEffect(() => {
    const subscriber = Firestore().collection("Pacientes")
    .onSnapshot((querySnapshot =>  {
      querySnapshot.docs.map((doc) => {
        if (doc.data().id == currentUser){
          setIsPaciente(true)
          setData(doc.data())
          getIdade(doc.data().dataNascimento)
          return data
        } 
      })
    }))
    return () => subscriber()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.editButton}>
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
          <Text style={styles.desc}>idade {idade} anos</Text>
          <Text style={styles.desc}>Hipótese {data.hipotese}</Text>
          <Text style={styles.desc}>Contato {data.phone}</Text>
        </View>
      :
        <View>
          <Text style={styles.name}>{data.nome}</Text>
          <Text style={styles.desc}>Fonoaudiólogo(a)</Text>
          <Text style={styles.desc}>CRFono {data.CRFono}</Text>
          <Text style={styles.desc}>Contato {data.phone}</Text>
        </View>
      }
    </View>
  )
}


      