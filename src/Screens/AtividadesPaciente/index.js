import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import AtividadePaciente from '../../Components/AtividadePaciente'
import Firestore from '@react-native-firebase/firestore'
import { FlatList } from 'react-native-gesture-handler'

export default function AtividadesPaciente() {
  const [atividade, setAtividade] = useState()
  
  useEffect(() => {
    const subscriber = Firestore()
      .collection('Atividades')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setAtividade(data)
      })
  return () => subscriber()
  }, [])
  
  
    return (
      <SafeAreaView style={styles.container}>
        <TitleBar title='Atividades' />
      <View style={styles.content}>

        <FlatList 
          data={atividade}
          renderItem={({item}) => <AtividadePaciente item={item}/>}
          keyExtractor={(item) => item.id}
        />
        
      </View>     
    </SafeAreaView>
  )
}