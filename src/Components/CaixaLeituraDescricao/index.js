import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function CaixaLeituraDescrição(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{props.msg} A mensagem vem aqui!</Text>
    </View>
  )
}