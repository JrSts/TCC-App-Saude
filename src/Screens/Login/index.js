import { SafeAreaView } from 'react-native'
import React from 'react'
import FormLogin from '../../Components/FormLogin'
import styles from './style'

export default function Login() {
  
  return (
    <SafeAreaView style={styles.container}>
      <FormLogin />
    </SafeAreaView>  
  )
}