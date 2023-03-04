import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import RadioAvaliar from '../../Components/RadioAvaliar'
import Button from '../../Components/Button'

export default function AvaliarPaciente() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade'/>
      <View style={styles.content} >
        <Text style={styles.subtitle}> Avaliar - Escrever </Text>
        <Text style={styles.question}>
          Como o paciente realizou esta atividade?
        </Text>
        <RadioAvaliar />
        <View style={styles.buttonBox}>
          <Button title='Salvar Avaliação' style={styles.button}/>
        </View>
      </View>
    </SafeAreaView>
  )
}