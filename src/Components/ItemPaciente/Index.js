import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

export default function ItemPaciente(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('AtividadesProfissional')}>
      <Icon name='user-circle-o' size={50} style={styles.avatar}/>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.idade}>{props.idade} Anos</Text>
      </View>
    </TouchableOpacity>
  )
}