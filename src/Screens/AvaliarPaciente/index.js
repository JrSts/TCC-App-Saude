import { View, Text, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import RadioAvaliar from '../../Components/RadioAvaliar'
import Button from '../../Components/Button'
import Firestore from '@react-native-firebase/firestore'

export default function AvaliarPaciente({route}) {

  const item = route.params.item
  console.log(item.id)

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade'/>
      <View style={styles.content} >
        <Text style={styles.subtitle}> Avaliar - Escrever </Text>
        <Text style={styles.question}>
          Como o paciente realizou esta atividade?
        </Text>
        <RadioAvaliar item={item} />
        <View style={styles.buttonBox}>
          <Button title='Salvar Avaliação' style={styles.button}/>
        </View>
      </View>
    </SafeAreaView>
  )
}