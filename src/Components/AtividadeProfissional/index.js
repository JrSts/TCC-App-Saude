import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import THEME from '../../THEME'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function AtividadeProfissional(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button}>
          <Icon name='trash' size={40} color={THEME.COLORS.CANCEL}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name='pencil' size={40} color={THEME.COLORS.EDIT} />
        </TouchableOpacity>
      </View>
    </View>
  )
}