import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function ButtonsOkCancel() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonOk}>
        <Text style={styles.buttonLabel}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCancel}>
        <Text style={styles.buttonLabel}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  )
}