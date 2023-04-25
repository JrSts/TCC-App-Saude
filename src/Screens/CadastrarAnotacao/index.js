import { View, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import CaixaTextoDescricao from '../../Components/CaixaTextoDescricao'
import Button from '../../Components/Button'
import Firestore from '@react-native-firebase/firestore'
import Auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

export default function CadastrarAnotacoes() {

  const [anotacoes, setAnotacoes] = useState('')
  const [data, setData] = useState('')
  const user = Auth().currentUser.uid
  const navigation = useNavigation()

  function addAnotacoes(){
    Firestore().collection('Pacientes').doc(data).update({
      anotacoes
    }).then(() => Alert.alert('Cadastrar Anotação', 'Anotação cadastrada com sucesso!'))
    navigation.goBack()
  }

  useEffect(() => {
    const subscriber = Firestore().collection('Pacientes')
    .onSnapshot(query => query.docs.map(doc => {
      if (doc.data().id == user){
        setAnotacoes(doc.data().anotacoes)
        setData(doc.id)
      }
    }))
    return () => subscriber()
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Anotações'/>
      <View style={styles.content}>
        <CaixaTextoDescricao title='Faca Anotaçoes durante a semana.' onChangeText={setAnotacoes} value={anotacoes}/>
        <View style={styles.buttonContainer}>
          <Button title='Salvar' style={styles.button} onPress={addAnotacoes}/>
        </View>
      </View>
    </SafeAreaView>
  )
}