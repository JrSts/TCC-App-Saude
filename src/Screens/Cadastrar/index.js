import { View } from 'react-native'
import React from 'react'
import FormSignIn from '../../Components/FormSignIn'
import styles from './style'

export default function Login() {
  return (
    <View style={styles.container}>
      <FormSignIn />
    </View>  
  )
}