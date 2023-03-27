import { View, Text, SafeAreaView, Switch, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import StyleInput from '../../Components/Input/style'
import StyleButton from '../../Components/Button/style'
import styles from './style'
import THEME from '../../THEME'
import Firestore from '@react-native-firebase/firestore'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Auth from '@react-native-firebase/auth'

export default function CompleteCadastro({ route }) {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);
  const [dataNascimento, setDataNascimento] = useState('')
  const [phone, setPhone] = useState('')
  const [hipotese, setHipotese] = useState('')
  const [apelido, setApelido] = useState('')
  const [nomeResponsavel, setNomeResponsavel] = useState('')
  const [nome, setNome] = useState('')
  const [CRFono, setCRFono] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Complete seu Cadastro</Text>

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
        </View>
      </ScrollView>
      <View style={styles.containerButton}>
        <TouchableOpacity
         style={StyleButton.buttonBox}
         onPress={ !isEnabled ? AddFono() : AddPaciente() }
        >
          {isLoading ? <ActivityIndicator />  : <Text style={StyleButton.buttonLabel}>Finalizar Cadastro</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )

  function AddPaciente() {
    route.params.createUser
    Firestore()
      .collection("Pacientes")
      .add({
        nome,
        phone,
        dataNascimento,
        hipotese,
        nomeResponsavel,
        apelido,
        email
      }
    )
    Alert.alert(
      "Informacoes Pessoais", 
      "Obrigado por ter completado o seu cadastro informando as demais informações solicitadas."
    )
  }

  function AddFono() {
    route.createUser()
    Firestore()
      .collection("Profissional")
      .add({
        nome,
        phone,
        dataNascimento,
        CRFono,
        email
      }
    )
    Alert.alert(
      "Informacoes Pessoais", 
      "Obrigado por ter completado o seu cadastro informando as demais informações solicitadas."
    )
  }
}