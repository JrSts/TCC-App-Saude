import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { FontAwesome5 } from '@expo/vector-icons'

import { useNavigation} from '@react-navigation/native'
import THEME from '../../THEME'

export default function AtividadePaciente({item}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RealizarAtividade', {item: item}) }>
      <FontAwesome5 name='dice' size={35} color={THEME.COLORS.BUTTON}/>
      <Text style={styles.buttonLabel}>{item.nome}</Text> 
    </TouchableOpacity>
  )
}