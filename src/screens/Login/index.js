import { Image, Keyboard, Pressable, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Checkbox } from 'react-native-paper'
import styles from './style'
import { useNavigation } from '@react-navigation/native'


export default function Login() {
  const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    return (
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <Image style={styles.image} source={require('../../assets/saudemental.webp')} />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer} >
          <TextInput 
            label="Email ou telefone"
            mode='outlined'

          />
          <TextInput 
            label="Senha"
            mode='outlined'
          />
        </View>
        <View style={styles.buttoncEsqueceuSenha}>
          <TouchableOpacity>
            <Text style={styles.textButtons}>Esqueceu a Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textButtons}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
        
       <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonLogar} onPress={ () => navigation.navigate('MenuProfissional')}>
            <Text style={styles.textLogar}> Entrar </Text>
          </TouchableOpacity>
          <Text style={styles.divisoria}> ~~~~~~~~~~~     Ou     ~~~~~~~~~~~  </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.buttonLogarGmail} onPress={ () => navigation.navigate('MenuPaciente')}>
              <Text style={styles.textLogar}> Entrar com Gmail </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogarFacebook} onPress={ () => navigation.navigate('MenuProfissional')}>
              <Text style={styles.textLogar}> Entrar com Facebook </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </Pressable>
    )
}