import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

export default function CaixaTextoDescricao(props) {
  return (
    <View style={styles.box}>
      <TextInput 
        multiline 
        textAlignVertical='top'
        numberOfLines={5}
        placeholder={props.title} 
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  )
}