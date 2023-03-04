import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import CaixaLeituraDescricao from '../../Components/CaixaLeituraDescricao'

export default function VisualizarLembrete() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Lembrete'/>
      <View style={styles.content}>
        <CaixaLeituraDescricao title='Anotacoes do profissional para o paciente' />
      </View>
    </SafeAreaView>
  )
}