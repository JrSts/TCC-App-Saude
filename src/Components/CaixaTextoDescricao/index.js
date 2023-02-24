import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

export default function CaixaTextoDescricao(props) {
  return (
    <View style={styles.box}>
      <TextInput 
        multiline 
        placeholder={props.title} 
        numberOfLines={5}
        style={styles.input}
      />
    </View>
  )
}