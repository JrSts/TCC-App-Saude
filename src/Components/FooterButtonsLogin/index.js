import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation} from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

export default function FooterButtonsLogin() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
        <Text style={styles.button}>Não tenho cadastro</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
         <Text style={styles.button}>Esqueci a Senha</Text> 
      </TouchableOpacity>  
    </View>
  )

  function handleForgotPassword() {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinição de Senha", 
      "Enviamos um email para você redefinir a sua senha, verifique sua caixa de entrada."))
    .catch((error) => console.log(error))
  }

}

