import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/AntDesign'
import THEME from '../../THEME'

import { useNavigation} from '@react-navigation/native'

export default function AtividadePaciente(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RealizarAtividade')}>
      <Text style={styles.buttonLabel}>{props.name}</Text> 
      <Icon 
        name= {props.finish ? 'checkcircleo' : 'hourglass'}
        color={THEME.COLORS.BUTTON}
        size={35}
      />
    </TouchableOpacity>

  )
}