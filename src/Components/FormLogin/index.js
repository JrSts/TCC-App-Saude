import { Text, TouchableOpacity, View , ActivityIndicator, Alert} from 'react-native'
import React, { useState } from 'react'
import StyleButton from '../../Components/Button/style'
import StyleInput from '../../Components/Input/style'
import styles from './style'
import Auth from '@react-native-firebase/auth'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function FormLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()
  
  return (
    <View style = {styles.container} >
      <Text style={styles.title}>Login</Text>
      <TextInput style={StyleInput.input} placeholder="Email" onChangeText={setEmail}/>
      <TextInput style={StyleInput.input} placeholder="Senha" onChangeText={setPassword} secureTextEntry/>
      <TouchableOpacity 
        style={StyleButton.buttonBox} 
        isLoading={isLoading} 
        onPress={ handleLogin }
      >
        {isLoading ? <ActivityIndicator />  : <Text style={StyleButton.buttonLabel}>Entrar</Text>}
      </TouchableOpacity> 

      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={styles.button}>Não tenho cadastro</Text> 
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.button}>Esqueci a Senha</Text> 
        </TouchableOpacity>  
      </View>
    </View>
  )

  function handleForgotPassword() {
    Auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinição de Senha", 
      "Enviamos um email para você redefinir a sua senha, verifique sua caixa de entrada."))
    .catch((error) => console.log(error))
  }

  function handleLogin() {
    setIsLoading(true)
    Auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Login", "Logado com sucesso"))
    .catch((error) => console.log(error))
    .finally(setIsLoading(false))
  }
}