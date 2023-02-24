import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RealizarAtividade from '../Screens/RealizarAtividade'
import AtividadesPaciente from '../Screens/AtividadesPaciente'
import ConfigurarAlarme from '../Screens/ConfigurarAlarme'
import GravarObservacao from '../Screens/GravarObservacao'
import AvaliarPaciente from '../Screens/AvaliarPaciente'

const Stack = createNativeStackNavigator()

export default function TasksNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Atividades'>
      <Stack.Screen name='Atividades' component={AtividadesPaciente} />
      <Stack.Screen name='RealizarAtividade' component={RealizarAtividade} />
      <Stack.Screen name='ConfigurarAlarme' component={ConfigurarAlarme} />
      <Stack.Screen name='GravarObservacao' component={GravarObservacao} />
      <Stack.Screen name='AvaliarPaciente' component={AvaliarPaciente} />
    </Stack.Navigator>
  )
}