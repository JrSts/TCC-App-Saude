import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VisualizarLembrete from '../Screens/VisualizarLembrete'
import CadastrarAnotacao from '../Screens/CadastrarAnotacao'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import THEME from '../THEME'
import TasksNavigator from './TasksNavigator'

const Tab = createBottomTabNavigator()

export default function BottomTabs() {
  return (
    <Tab.Navigator 
      initialRouteName='AtividadesNavigator' 
      screenOptions={{ 
        headerShown: false, 
        tabBarShowLabel: false
      }} 
    >
      <Tab.Screen
        name="Lembretes"
        component={VisualizarLembrete}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon 
                name='message-bulleted' 
                size={focused ? 25+5 : 25} 
                color={focused ? THEME.COLORS.BUTTON : THEME.COLORS.GRAY} />
                <Text style={focused ? styles.labelSelected : styles.label }>Lembretes do Fono</Text>
            </>
          )
        }}
      />
      <Tab.Screen
        name="AtividadesNavigator"
        component={TasksNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon 
                name='clipboard-check-multiple-outline' 
                size={focused ? 25+5 : 25} 
                color={focused ? THEME.COLORS.BUTTON : THEME.COLORS.GRAY} 
              />
              <Text style={focused ? styles.labelSelected : styles.label }>Atividades</Text>
            </>
          )
        }}
      />
      <Tab.Screen
        name="Anotacoes"
        component={CadastrarAnotacao}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon 
                name='comment' 
                size={focused ? 25+5 : 25} 
                color={focused ? THEME.COLORS.BUTTON : THEME.COLORS.GRAY} 
              />
              <Text style={focused ? styles.labelSelected : styles.label }>Suas Anotações</Text>
            </>
          )
        }}
      />
    </Tab.Navigator>

  )
}

const styles = StyleSheet.create({
  label: {
    color: THEME.COLORS.GRAY,
    fontSize: 10
  },

  labelSelected: {
    color: THEME.COLORS.BUTTON,
    fontSize: 12,
    fontWeight: 'bold'
  }

})