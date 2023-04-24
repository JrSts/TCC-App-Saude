import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RealizarAtividade from '../Screens/RealizarAtividade'
import AtividadesPaciente from '../Screens/AtividadesPaciente'
import GravarObservacao from '../Screens/GravarObservacao'
import Perfil from '../Screens/Perfil'
import AtualizarPerfil from '../Screens/AtualizarPerfil'
import Respostas from '../Screens/Respostas'

const Stack = createNativeStackNavigator()

export default function TasksNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Atividades'>
      <Stack.Screen name='Atividades' component={AtividadesPaciente} />
      <Stack.Screen name='RealizarAtividade' component={RealizarAtividade} />
      <Stack.Screen name='GravarObservacao' component={GravarObservacao} />
      <Stack.Screen name='Respostas' component={Respostas} />
      <Stack.Screen name='Perfil' component={Perfil} />
      <Stack.Screen name='AtualizarPerfil' component={AtualizarPerfil}/>
    </Stack.Navigator>
  )
}