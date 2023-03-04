import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import FormCadastroPaciente from '../../Components/FormCadastroPaciente'
import ButtonsOkCancel from '../../Components/ButtonsOkCancel'

export default function CadastrarPaciente() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Pacientes' />
      <View style={styles.content}>
        <Text style={styles.subtitle} >
          Cadastro de Pacientes
        </Text>
        <FormCadastroPaciente />
        <ButtonsOkCancel />
      </View>
    </SafeAreaView>

  )
}