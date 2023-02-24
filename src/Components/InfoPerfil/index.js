import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function InfoPerfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.editButton}>
        <Icon name='pencil' size={30} style={styles.edit}/>
      </TouchableOpacity>
      <Icon name='user-circle-o' style={styles.img} size={200}/>
      <Text style={styles.name}>Fulaninho</Text>
      <Text style={styles.desc}>10 anos</Text>
      <Text style={styles.desc}>Autismo</Text>
      <Text style={styles.desc}>79 99999 - 8888</Text>
    </View>
  )
}
      