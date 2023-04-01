import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from '@expo/vector-icons/FontAwesome'
import { useNavigation, useRoute } from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'

export default function TitleBar(props) {
  const currentUser = Auth().currentUser.uid
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Perfil", {id: currentUser})}
      >
        <Icon name='user-circle-o' size={40} style={styles.img} />
      </TouchableOpacity>
    </View>
  )
}