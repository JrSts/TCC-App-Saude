import { SafeAreaView, TouchableOpacity, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FormLogin from '../../Components/FormLogin'
import styles from './style'

import notifee from '@notifee/react-native'

export default function Login() {

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  }

  useEffect(() => {
    onDisplayNotification()
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../Assets/Logo.png')} style={styles.image}/>
      <FormLogin  />
    </SafeAreaView>  
  )
}