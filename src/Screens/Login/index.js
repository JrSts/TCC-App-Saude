import { SafeAreaView, TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import FormLogin from '../../Components/FormLogin'
import styles from './style'
import Auth from '@react-native-firebase/auth'
import Firestore from "@react-native-firebase/firestore"

import notifee, { AndroidImportance, EventType, TriggerType } from '@notifee/react-native'

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
      <FormLogin  />
    </SafeAreaView>  
  )
}