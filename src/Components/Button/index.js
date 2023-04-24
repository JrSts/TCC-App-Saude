import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function Button(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
      style={styles.buttonBox} 
      onPress={() => {props.onPress()}}
    >
      <Text style = {styles.buttonLabel}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}