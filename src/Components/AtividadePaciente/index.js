import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from '@expo/vector-icons/AntDesign'
import THEME from '../../THEME'

import { useNavigation} from '@react-navigation/native'

export default function AtividadePaciente({item}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RealizarAtividade')}>
      <Text style={styles.buttonLabel}>{item.nome}</Text> 
      <Icon 
        name= {item.status ? 'checkcircleo' : 'hourglass'}
        color={THEME.COLORS.BUTTON}
        size={35}
      />
    </TouchableOpacity>

  )
}