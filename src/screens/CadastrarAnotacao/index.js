import { View, SafeAreaView } from 'react-native'
import React from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import CaixaTextoDescricao from '../../Components/CaixaTextoDescricao'
import Button from '../../Components/Button'

export default function CadastrarAnotacoes() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Anotações'/>
      <View style={styles.content}>
        <CaixaTextoDescricao title='Faca Anotaçoes durante a semana.' />
        <View style={styles.buttonContainer}>
          <Button title='Salvar' style={styles.button}/>
        </View>
      </View>
    </SafeAreaView>
  )
}