import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from'react-native-vector-icons/FontAwesome5'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function ButtonAddPaciente() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('CadastrarPaciente')}>
        <Icon name='user-plus' size={50} style={styles.img}/>
      </TouchableOpacity>
    </View>
  )
}