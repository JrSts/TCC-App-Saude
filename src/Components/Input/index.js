import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

export default function Input(props) {
  return (
      <TextInput 
        placeholder= {props.title}
        style = {styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
      />
  )
}