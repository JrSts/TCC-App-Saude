import { Text, TouchableOpacity, View, Alert, TextInput} from 'react-native'
import React, { useState } from 'react'
import StyleButton from '../../Components/Button/style'
import StyleInput from '../../Components/Input/style'
import styles from './style'
import Auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import Load from '../Load'
import THEME from '../../THEME'
import { Checkbox } from 'react-native-paper'

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [exibirSenha, setExibirSenha] = useState(false)
  
  const navigation = useNavigation()

  
  function handleForgotPassword() {
    !email ?
    Alert.alert("Recuperar senha", "Para recuperar sua senha preencha o campo Email com seu email cadastrado.")
    :
    Auth()
    .sendPasswordResetEmail(email)
    .then(() => {Alert.alert("Redefinição de Senha", 
    "Enviamos um email para você redefinir a sua senha, verifique sua caixa de entrada.")})
    .catch((error) => {console.log(error)})
  }
  
  function handleLogin() {
    if (email == '' || password == '') { 
      Alert.alert("Login", "Preencha os dados de Email e senha corretamente para Entrar")
    } else {
      setIsLoading(true)
      Auth().signInWithEmailAndPassword(email, password)
      .then(() => {Alert.alert("Seja Bem Vindo!")})
      .catch(() => {Alert.alert("Ops, ocorreu um erro!", "Você já está cadastrado? Se não estiver cadastrado, por favor clique em 'Não Tenho Cadastro'.")})
      .finally(() => {setIsLoading(false)})
    }
  }

  return (
    <View style = {styles.container} >
      <Text style={styles.title}>Login</Text>
      <View style={styles.containerForm}> 
        <TextInput style={StyleInput.input} placeholder="Email" onChangeText={setEmail}/>
        <TextInput style={StyleInput.input} placeholder="Senha" onChangeText={setPassword} secureTextEntry={!exibirSenha}/>
        <View style={styles.checkboxContainer}>
            <Checkbox
              status={exibirSenha ? 'checked' : 'unchecked'}
              onPress={() => {setExibirSenha(!exibirSenha);}}
              color={THEME.COLORS.BUTTON}
              value={exibirSenha}
            /> 
            <Text style={styles.checkboxlabel}>Exibir Senha</Text>
          </View>
        <TouchableOpacity 
          style={StyleButton.buttonBox} 
          isLoading={isLoading} 
          onPress={() => handleLogin()}
        >
          {isLoading ? <Load color={THEME.COLORS.BACKGROUND}/>  : <Text style={StyleButton.buttonLabel}>Entrar</Text>}
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={styles.button}>Não tenho cadastro</Text> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleForgotPassword()}>
          <Text style={styles.button}>Esqueci a Senha</Text> 
        </TouchableOpacity>  
      </View>
    </View>
  )
}  