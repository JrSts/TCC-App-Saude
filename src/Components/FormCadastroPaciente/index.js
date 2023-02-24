import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Input from './../Input'

export default function FormCadastroPaciente() {
  return (
    <View style={styles.container}>
      <Input title='Nome' />
      <Input title='Apelido' />
      <Input title='Idade' />
      <Input title='Nome do Responsável' />
      <Input title='Telefone' />
      <Input title='Hipótese Diagnóstica' />
    </View>
  )
}