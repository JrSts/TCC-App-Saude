import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  Switch,
  ScrollView,
  
} from 'react-native'
import React, { useState } from 'react'
import StyleInput from '../Input/style'
import styles from './style'
import StyleButton from '../Button/style'
import { useNavigation, useRoute } from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'
import Firestore, {FirebaseFirestoreTypes} from "@react-native-firebase/firestore"
import THEME from '../../THEME'

export default function FormSignIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false);
  const [dataNascimento, setDataNascimento] = useState('')
  const [phone, setPhone] = useState('')
  const [hipotese, setHipotese] = useState('')
  const [apelido, setApelido] = useState('')
  const [nomeResponsavel, setNomeResponsavel] = useState('')
  const [nome, setNome] = useState('')
  const [CRFono, setCRFono] = useState('')
  const [anotacoes, setAnotacoes] = useState('')
  const [lembrete, setLembrete] = useState('')
  
  const navigation = useNavigation()
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastrar
      </Text>

      <View style={styles.isFono}>
        <Text style={!isEnabled ? styles.isFonoLabelOn : styles.isFonoLabelOff}>Sou Fonoaudiólogo</Text>
        <View >
          <Switch
            trackColor={{ false: THEME.COLORS.GRAY, true: THEME.COLORS.BUTTON }}
            thumbColor={THEME.COLORS.BACKGROUND}
            ios_backgroundColor={THEME.COLORS.GRAY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={isEnabled ? styles.isFonoLabelOn : styles.isFonoLabelOff}>Sou Paciente</Text>
      </View>

      <ScrollView style={styles.containerForm}>
        <View>
          <TextInput style={StyleInput.input} placeholder="Nome" onChangeText={setNome} />
          <TextInput style={StyleInput.input} placeholder="Telefone" onChangeText={setPhone} />
          <TextInput style={StyleInput.input} placeholder="Data de Nascimento" onChangeText={setDataNascimento} />
          {!isEnabled ?
            <TextInput style={StyleInput.input} placeholder="CRFono" onChangeText={setCRFono} />
          : 
            <View>
              <TextInput style={StyleInput.input} placeholder="Apelido" onChangeText={setApelido} />
              <TextInput style={StyleInput.input} placeholder="Nome do Responsavel" onChangeText={setNomeResponsavel} />
              <TextInput style={StyleInput.input} placeholder="Hipotese diagnostica" onChangeText={setHipotese} />
            </View>
          } 
          <TextInput style={StyleInput.input} placeholder="E-mail" onChangeText={setEmail}/>
          <TextInput style={StyleInput.input} placeholder="Senha" onChangeText={setPassword} secureTextEntry/>

        </View>
      </ScrollView>
      <View style={styles.containerButton}>
        <TouchableOpacity 
          style={StyleButton.buttonBox} 
          onPress={() => createUser()}
          isLoading={isLoading}
          >
          { isLoading ? <ActivityIndicator />  : <Text style={StyleButton.buttonLabel}>Cadastrar</Text>}
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
    .then((res) => {
      if (isEnabled) {
        Firestore()
          .collection("Pacientes")
          .add({
            id: res.user.uid,
            nome,
            phone,
            dataNascimento,
            hipotese,
            nomeResponsavel,
            apelido,
            email,
            anotacoes,
            lembrete,
          })
          .then(() => console.log("tudo certo"))
          .catch((error) => console.log("Erro => ", error))
      } else {
        Firestore()
          .collection("Profissional")
          .add({
            id: res.user.uid,
            nome,
            phone,
            dataNascimento,
            CRFono,
            email,
          })
          .then(() => console.log("tudo certo"))
          .catch((error) => console.log("Erro => ", error))
        }
      })
    .catch((error) => {console.log("error => ", error)})
    .finally(() => setIsLoading(false))
  }
}
