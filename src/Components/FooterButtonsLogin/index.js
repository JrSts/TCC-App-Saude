import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation} from '@react-navigation/native'

export default function FooterButtonsLogin() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
        <Text style={styles.button}>Não tenho cadastro</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
         <Text style={styles.button}>Esqueci a Senha</Text> 
      </TouchableOpacity>  
    </View>
  )
}

