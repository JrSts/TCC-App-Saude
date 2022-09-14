import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AdicionarAtividade from './../screens/AdicionarAtividade'
import AdicionarLembrete from './../screens/AdicionarLembrete'
import ListaAtividades from './../screens/ListaAtividades'
import AtividadesCadastradas from './../screens/AtividadesCadastradas'
import CadastrarPaciente from './../screens/CadastrarPaciente'
import Login from './../screens/Login'
import MenuPaciente from './../screens/MenuPaciente'
import MenuProfissional from './../screens/MenuProfissional'
import SelecionarPaciente from './../screens/SelecionarPaciente'
import RealisarAtividade from './../screens/RealisarAtividade'
import AdicionarAnotacoes from './../screens/AdicionarAnotacoes'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AdicionarAtividade"
        component={AdicionarAtividade}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="ListaAtividades"
        component={ListaAtividades}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AdicionarLembrete"
        component={AdicionarLembrete}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AtividadesCadastradas"
        component={AtividadesCadastradas}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CadastrarPaciente"
        component={CadastrarPaciente}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MenuPaciente"
        component={MenuPaciente}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MenuProfissional"
        component={MenuProfissional}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SelecionarPaciente"
        component={SelecionarPaciente}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RealisarAtividade"
        component={RealisarAtividade}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AdicionarAnotacoes"
        component={AdicionarAnotacoes}
        options={{headerShown: false}}
      />
       
    </Stack.Navigator>
  )
}

