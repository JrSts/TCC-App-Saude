import { View, Text, TouchableOpacity, TextInput, Switch, ActivityIndicator, Alert} from 'react-native'
import React, { useState } from 'react'
import StyleInput from '../Input/style'
import styles from './style'
import StyleButton from '../Button/style'
import { useNavigation } from '@react-navigation/native'
import THEME from '../../THEME'
import Auth from '@react-native-firebase/auth'

export default function FormSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastrar
      </Text>
      <View style={styles.isFono}> 
        <Text style={!isEnabled ? styles.isFonoLabelOn : styles.isFonoLabelOff }>Sou Fonoaudiólogo</Text>
        <View style={styles.container}>
          <Switch
            trackColor={{false: THEME.COLORS.GRAY, true: THEME.COLORS.BUTTON}}
            thumbColor={THEME.COLORS.BACKGROUND}
            ios_backgroundColor= {THEME.COLORS.GRAY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={isEnabled ? styles.isFonoLabelOn : styles.isFonoLabelOff }>Sou Paciente</Text>
      </View>
      
      <View>
        <TextInput style={StyleInput.input} placeholder="E-mail" onChangeText={setEmail}/>
        <TextInput style={StyleInput.input} placeholder="Senha" onChangeText={setPassword} secureTextEntry/>
        { !isEnabled ? 
          <TextInput style={StyleInput.input} placeholder="CRFono"/> 
          : 
          <></>
        }

        <TouchableOpacity 
          style={StyleButton.buttonBox} 
          onPress={ createUser}
          isLoading={isLoading}
        >
          {isLoading ? <ActivityIndicator />  : <Text style={StyleButton.buttonLabel}>Cadastrar</Text>}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.buton}>
          Já estou cadastrado
        </Text>
      </TouchableOpacity>
    </View>
  )

  function createUser() {
    setIsLoading(true)
    Auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Conta", "Cadastrado com sucesso"))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false))

  }
}