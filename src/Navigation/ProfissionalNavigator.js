import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListarPacientes from '../Screens/ListarPacientes'
import Perfil from '../Screens/Perfil'
import CadastrarLembrete from '../Screens/CadastrarLembrete'
import AtividadesProfissional from '../Screens/AtividadesProfissional'
import CadastrarAtividade from '../Screens/CadastrarAtividade'
import EditarAtividade from '../Screens/EditarAtividade'
import MeusPacientes from '../Screens/MeusPacientes'
import AtualizarPerfil from '../Screens/AtualizarPerfil'
import EditarPaciente from '../Screens/EditarPaciente'
import PerfilPaciente from '../Screens/PerfilPaciente'
import ValidarCodigo from '../Screens/ValidarCodigo'

const Stack = createNativeStackNavigator()

export default function ProfissionalNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='MeusPacientes'>
      <Stack.Screen name='MeusPacientes' component={MeusPacientes}/>
      <Stack.Screen name='ListarPacientes' component={ListarPacientes}/>
      <Stack.Screen name='AtualizarPerfil' component={AtualizarPerfil}/>
      <Stack.Screen name='Perfil' component={Perfil}/>
      <Stack.Screen name='CadastrarLembrete' component={CadastrarLembrete}/>
      <Stack.Screen name='AtividadesProfissional' component={AtividadesProfissional}/>
      <Stack.Screen name='CadastrarAtividade' component={CadastrarAtividade}/>
      <Stack.Screen name='EditarAtividade' component={EditarAtividade} />
      <Stack.Screen name='EditarPaciente' component={EditarPaciente} />
      <Stack.Screen name='PerfilPaciente' component={PerfilPaciente} />
      <Stack.Screen name='ValidarCodigo' component={ValidarCodigo} />
    </Stack.Navigator>
  )
}