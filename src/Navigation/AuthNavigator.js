import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Cadastrar from '../Screens/Cadastrar'
const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastrar' component={Cadastrar} />
    </Stack.Navigator>
  )
}
