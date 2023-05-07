import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import {FontAwesome, SimpleLineIcons} from '@expo/vector-icons'
import Auth from '@react-native-firebase/auth'
import Firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native'
import Load from '../Load'
import THEME from '../../THEME'

export default function InfoPerfil() {

  const [isPaciente, setIsPaciente] = useState(null)
  const [data, setData] = useState({})
  const [idade, setIdade] = useState(0)
  const [id, setId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const currentUser = Auth().currentUser.uid

  const navigation = useNavigation()

  function signOut() {
    Auth().signOut()
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
            return data
          }
        })
      })
      setIsLoading(false)
    return () => subscriber()
  }, [currentUser])

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
    }))
    setIsLoading(false)
    return () => subscriber()
  }, [currentUser])
 

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
        <InfoPaciente />
      :
        <InfoProfissional />
      }
    </View>
  )

  function InfoPaciente(){
    return(
      isLoading ? 
        <Load />
      :
        <ScrollView>
          <Text style={styles.name}>{data.nome}</Text>
          <Text style={styles.desc}>Data de Nascimento {data.dataNascimento}</Text>
          <Text style={styles.desc}>Hipótese {data.hipotese}</Text>
          <Text style={styles.desc}>Celular {data.phone}</Text>
          <Text style={styles.desc}>E-mail {data.email}</Text>
          <Text style={styles.codigo}>Código de Segurança {data.codigoSeguranca}</Text>
        </ScrollView>
    )
  }

  function InfoProfissional() {
    return (
      isLoading ? 
      <Load />
      :
      <ScrollView>
          <Text style={styles.name}>{data.nome}</Text>
          <Text style={styles.desc}>Fonoaudiólogo(a)</Text>
          <Text style={styles.desc}>CRFA {data.CRFono}</Text>
          <Text style={styles.desc}>Celular {data.phone}</Text>
          <Text style={styles.desc}>E-mail {data.email}</Text>
        </ScrollView>
    )
  }
}


      