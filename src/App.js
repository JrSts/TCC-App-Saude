import React from 'react'
import AuthNavigator from './Navigation/AuthNavigator'
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}
