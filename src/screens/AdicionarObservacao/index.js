import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

export default function AdicionarObservacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escrever</Text>
      <Text style={styles.questionText}>
            Escreva uma observalção: (Opicional)
        </Text>
        <TextInput placeholder='Comentario' multiline style={styles.inputComentario}/>
        
    </View>
  )
}