import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListarPacientes from '../Screens/ListarPacientes'
import Perfil from '../Screens/Perfil'
import CadastrarPaciente from '../Screens/CadastrarPaciente'
import CadastrarLembrete from '../Screens/CadastrarLembrete'
import AtividadesProfissional from '../Screens/AtividadesProfissional'
import CadastrarAtividade from '../Screens/CadastrarAtividade'
import EditarAtividade from '../Screens/EditarAtividade'

const Stack = createNativeStackNavigator()

export default function ProfissionalNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
      <Stack.Screen name='ListarPacientes' component={ListarPacientes}/>
      <Stack.Screen name='Perfil' component={Perfil}/>
      <Stack.Screen name='CadastrarPaciente' component={CadastrarPaciente}/>
      <Stack.Screen name='CadastrarLembrete' component={CadastrarLembrete}/>
      <Stack.Screen name='AtividadesProfissional' component={AtividadesProfissional}/>
      <Stack.Screen name='CadastrarAtividade' component={CadastrarAtividade}/>
      <Stack.Screen name='EditarAtividade' component={EditarAtividade} />
    </Stack.Navigator>
  )
}