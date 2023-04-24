import { View,  SafeAreaView, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import AtividadePaciente from '../../Components/AtividadePaciente'
import Firestore from '@react-native-firebase/firestore'
import Load from '../../Components/Load'
import Auth from '@react-native-firebase/auth'


export default function AtividadesPaciente() {
  const [atividade, setAtividade] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [idPaciente, setIdPaciente] = useState('')
  const uidPaciente = Auth().currentUser.uid
  
  useEffect(() => {
    const subscriber = Firestore()
      .collection('Pacientes')
      .where('id', '==', uidPaciente)
      .onSnapshot(query => query.docs.map(doc => {
        setIdPaciente(doc.id)
      }))
  }, [uidPaciente])

  useEffect(() => {
    setIsLoading(true)
    const subscriber = Firestore()
      .collection('Atividades')
      .where('idPaciente', '==', idPaciente)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
      setAtividade(data)
      setIsLoading(false)
    })
  return () => subscriber()
  }, [idPaciente])

    return (
      <SafeAreaView style={styles.container}>
        <TitleBar title='Atividades' />
      <View style={styles.content}>
        {isLoading ? <Load /> : 
          <FlatList 
            data={atividade}
            renderItem={({item}) => <AtividadePaciente item={item}/>}
            keyExtractor={(item) => item.id}
          />
        }
      </View>     
    </SafeAreaView>
  )
}