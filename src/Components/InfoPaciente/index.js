import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import {FontAwesome, SimpleLineIcons} from '@expo/vector-icons'
import Firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native'

export default function InfoPaciente(props) {

  const [data, setData] = useState({})
  const [idPaciente, setIdPaciente] = useState('')
  
  const uidPaciente = props.idPaciente
  
  const navigation = useNavigation()
 

  function getIdade(nascimento){
    console.log(nascimento)
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
    const subscriber = Firestore().collection("Pacientes")
    .onSnapshot((querySnapshot =>  {
      querySnapshot.docs.map((doc) => {
        if (doc.data().id == uidPaciente){
          setIdPaciente(doc.id)
          setData(doc.data())
          return data
        } 
      })
    }))
    return () => subscriber()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.containerButtons}>
        <TouchableOpacity 
          style={styles.deleteButton} 
          onPress={() => removerPaciente()}
        >
          <FontAwesome name='trash' size={30} style={styles.edit}/>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={() => {navigation.navigate('EditarPaciente', {id:  idPaciente})}}
        >
          <FontAwesome name='pencil' size={30} style={styles.edit}/>
        </TouchableOpacity>
      </View>
      <FontAwesome name='user-circle-o' style={styles.img} size={200}/>
        <View>
          <Text style={styles.name}>{data.nome}</Text>
          <Text style={styles.desc}>idade {data.dataNascimento && getIdade(data.dataNascimento)} anos</Text>
          <Text style={styles.desc}>Hipótese {data.hipotese}</Text>
          <Text style={styles.desc}>Celular {data.phone}</Text>
          <Text style={styles.desc}>E-mail {data.email}</Text>
        </View>
    </View>
  )


  function removerPaciente() {
    try {
      Firestore().collection('Pacientes').doc(idPaciente).update({
        idProfissional: ''
      })
      navigation.goBack()
    } catch (error) {
      console.log(error)
    }
  }
}


      