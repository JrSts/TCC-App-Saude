import { View, SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import CaixaLeituraDescricao from '../../Components/CaixaLeituraDescricao'
import Firestore from '@react-native-firebase/firestore'
import Auth from '@react-native-firebase/auth'

export default function VisualizarLembrete() {

  const [lembrete, setLembrete ] = useState('Seu fonoaudiólogo não registrou lembretes!')

  const user = Auth().currentUser.uid

  useEffect(() => {
    const subscriber = Firestore().collection('Pacientes')
    .onSnapshot(query => query.docs.map(doc => {
      if (doc.data().id == user){
        if (doc.data().lembrete != ''){
          setLembrete(doc.data().lembrete)
        }
      }
    }))
    return () => subscriber()
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Lembrete'/>
      <View style={styles.content}>
        <CaixaLeituraDescricao 
          msg={lembrete}  
        />
      </View>
    </SafeAreaView>
  )
}