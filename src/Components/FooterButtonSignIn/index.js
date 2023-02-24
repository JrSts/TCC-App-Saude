import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function FooterButtonSignIn() {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>
          Já estou cadastrado.
        </Text>
      </TouchableOpacity>
    </View>
  )
}
