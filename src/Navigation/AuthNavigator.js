import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Cadastrar from '../Screens/Cadastrar'
import BottomTabs from './BottomTabs'
import ListarPacientes from '../Screens/ListarPacientes'
import Perfil from '../Screens/Perfil'
import CadastrarAtividade from '../Screens/CadastrarAtividade'
import CadastrarPaciente from '../Screens/CadastrarPaciente'
import CadastrarLembrete from '../Screens/CadastrarLembrete'
import AtividadesProfissional from '../Screens/AtividadesProfissional'


const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastrar' component={Cadastrar} />
      <Stack.Screen name='Home' component={BottomTabs} />
      <Stack.Screen name='ListarPacientes' component={ListarPacientes}/>
      <Stack.Screen name='Perfil' component={Perfil}/>
      <Stack.Screen name='CadastrarPaciente' component={CadastrarPaciente}/>
      <Stack.Screen name='CadastrarLembrete' component={CadastrarLembrete}/>
      <Stack.Screen name='AtividadesProfissional' component={AtividadesProfissional}/>
      <Stack.Screen name='CadastrarAtividade' component={CadastrarAtividade}/>
    </Stack.Navigator>
  )
}