import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'


export default function ButtonsOkCancel(props) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.ok()} style={styles.buttonOk}>
        <Text style={styles.buttonLabel}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCancel} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonLabel}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  )
}