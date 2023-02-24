import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Input from '../Input'
import Button from '../Button'
import styles from './style'

export default function FormLogin(props) {
  return (
    <View style = {styles.container} >
      <Text style={styles.title}>Login</Text>
      <Input title = "Email" />
      <Input title = "Senha" />
      <Button title = "Entrar" onPress='ListarPacientes'/>
    </View>
  )
}