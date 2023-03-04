import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import CaixaTextoDescricao from '../../Components/CaixaTextoDescricao'

export default function GravarObservacao() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade' />
      <View style={styles.content}>
        <Text style={styles.subtitle}>Observação - Escrever</Text>
        <CaixaTextoDescricao title='Faça observações sobre a atividade' />
      </View>
    </SafeAreaView>
  )
}