import { View, SafeAreaView } from 'react-native'
import React from 'react'
import TitleBar from  '../../Components/TitleBar'
import TextBox from '../../Components/CaixaTextoDescricao'
import styles from './style'
import Button from '../../Components/Button'

export default function CadastrarLembrete() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Lembrete'/>
      <View style={styles.content}>
        <TextBox title='Deixe um lembrete para o paciente' />
        <Button title='Salvar Lembrete'/>
      </View>
    </SafeAreaView>
  )
}