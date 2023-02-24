import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../Input'
import styles from './style'
import Button from '../Button'
import { useNavigation } from '@react-navigation/native'

export default function FormSignIn() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        Cadastrar
      </Text>

      <View>
        <Input title="E-mail"/>
        <Input title="Telefone"/>
        <Input title="Senha"/>
        <Input title="Confirmar Senha"/>
        <Button title="Cadastrar" />
      </View>
      <TouchableOpacity>
        <Text style={styles.buton} onPress={() => navigation.goBack()}>
          Já estou cadastrado
        </Text>
      </TouchableOpacity>
    </View>
  )
}