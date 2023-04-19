import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

import { useNavigation} from '@react-navigation/native'

export default function AtividadePaciente({item}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RealizarAtividade', {item: item}) }>
      <Text style={styles.buttonLabel}>{item.nome}</Text> 
    </TouchableOpacity>
  )
}