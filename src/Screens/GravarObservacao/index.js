import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import CaixaTextoDescricao from '../../Components/CaixaTextoDescricao'
import Button from '../../Components/Button'
import Firestore from '@react-native-firebase/firestore'

export default function GravarObservacao({route}) {

  const item = route.params.item
  const [observacao, setObservacao] = useState('')

  function addObservacao(){
    Firestore().collection('Atividades').doc(item.id).update({
      observacao: observacao
    })
    .then(() => Alert.alert('A sua observação foi salva, com sucesso!'))
    .catch((error) => Alert.alert('Erro', "A sua observação não foi regitrada!"))
  }

  useEffect(() => {
    const subscriber = Firestore().collection('Atividades')
    .onSnapshot(query => query.docs.map( doc => {
      console.log(item.id)
      if (doc.id == item.id){
        setObservacao(doc.data().observacao)
      }
    }))
  
    return () => subscriber()
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade' />
      <View style={styles.content}>
        <Text style={styles.subtitle}>Observação - {item.nome}</Text>
        <CaixaTextoDescricao 
          title='Faça observações sobre a atividade' 
          onChangeText={setObservacao} 
          value={observacao}
        />
        <View style={styles.containerButton}>
          <Button title='Salvar Observação' onPress={addObservacao}/>
        </View>
      </View>
    </SafeAreaView>
  )
}