import React, { useEffect, useState } from 'react'
import AuthNavigator from './Navigation/AuthNavigator'
import Profissional from "../src/Navigation/ProfissionalNavigator"
import Paciente from '../src/Navigation/BottomTabs'
import { NavigationContainer } from '@react-navigation/native'
import Auth from "@react-native-firebase/auth"
import Firestore from "@react-native-firebase/firestore"


export default function App() {
  const [user, setUser] = useState(null)
  const [isPaciente, setIsPaciente] = useState(null)
  const currentUser = user && Auth().currentUser.uid
  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(setUser)
    return subscriber
  }, [])

  useEffect (() => {
    const subscriber = Firestore()
    .collection('Pacientes')
    .where('id', '==', currentUser)
    .get()
    .then((res) => {
      if (res.empty) {
        setIsPaciente(false)
      } else {
        setIsPaciente(true)
      }
    })
  }, [currentUser])

  return (
    <NavigationContainer>
      { !user ? <AuthNavigator /> : isPaciente ? <Paciente /> : <Profissional /> }
    </NavigationContainer>
  )
}
