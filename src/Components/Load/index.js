import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './style'

export default function Load(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={props.color}/>
    </View>
  )
}