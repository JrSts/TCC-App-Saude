import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView,
  
} from 'react-native'
import React, { useState } from 'react'
import StyleInput from '../Input/style'
import styles from './style'
import StyleButton from '../Button/style'
import { useNavigation, useRoute } from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'
import Firestore from "@react-native-firebase/firestore"
import { Checkbox } from 'react-native-paper'
import THEME from '../../THEME'

export default function FormSignIn() {
  
  const [isLoading, setIsLoading] = useState(false)
  const [isPaciente, setIsPaciente] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dataNascimento, setDataNascimento] = useState('')
  const [phone, setPhone] = useState('')
  const [hipotese, setHipotese] = useState('')
  const [apelido, setApelido] = useState('')
  const [nomeResponsavel, setNomeResponsavel] = useState('')
  const [nome, setNome] = useState('')
  const [CRFono, setCRFono] = useState('')
  const [anotacoes, setAnotacoes] = useState('')
  const [lembrete, setLembrete] = useState('')
  const [codigoSeguranca, setCodigoSeguranca] = useState()
  const idProfissional = ''

  const [exibirSenha, setExibirSenha] = useState(false)
  
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastrar
      </Text>
      <View style={styles.isPaciente}>
        <TouchableOpacity 
          style={isPaciente ? styles.buttomSelected: styles.buttomUnselected}
          onPress={() => setIsPaciente(true)}
        >
          <Text style={isPaciente ? styles.isPacienteLabelOn : styles.isPacienteLabelOff}>Sou Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setIsPaciente(false)}
          style={!isPaciente ? styles.buttomSelected: styles.buttomUnselected}  
        >
          <Text style={!isPaciente ? styles.isPacienteLabelOn : styles.isPacienteLabelOff}>Sou Fonoaudiólogo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.containerForm}>
        <View>
          <TextInput style={StyleInput.input} placeholder="Nome" onChangeText={setNome} />
          <TextInput style={StyleInput.input} placeholder="Telefone" onChangeText={setPhone} />
          <TextInput style={StyleInput.input} placeholder="Data de Nascimento" onChangeText={setDataNascimento} />
          {!isPaciente ?
            <TextInput style={StyleInput.input} placeholder="CRFA" onChangeText={setCRFono} />
          : 
            <View>
              <TextInput style={StyleInput.input} placeholder="Apelido" onChangeText={setApelido} />
              <TextInput style={StyleInput.input} placeholder="Nome do Responsavel" onChangeText={setNomeResponsavel} />
              <TextInput style={StyleInput.input} placeholder="Hipotese diagnostica" onChangeText={setHipotese} />
            </View>
          } 
          <TextInput style={StyleInput.input} placeholder="E-mail" onChangeText={setEmail}/>
          <TextInput style={StyleInput.input} placeholder="Senha (6 Caracteres ou mais)" onChangeText={setPassword} secureTextEntry={!exibirSenha}/>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={exibirSenha ? 'checked' : 'unchecked'}
              onPress={() => {setExibirSenha(!exibirSenha);}}
              color={THEME.COLORS.BUTTON}
              value={exibirSenha}
            /> 
            <Text style={styles.checkboxlabel}>Exibir Senha</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerButton}>
        <TouchableOpacity 
          style={password.length < 6 ? StyleButton.buttonBoxDisabled : StyleButton.buttonBox} 
          onPress={() => createUser()}
          isLoading={isLoading}
          disabled={password.length < 6 ? true : false}
          >
          { isLoading ? <ActivityIndicator />  : 
            <Text style={password.length < 6 ? StyleButton.buttonLabelDisabled : StyleButton.buttonLabel}>
              Cadastrar
            </Text>}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.buton}>
          Já estou cadastrado
        </Text>
      </TouchableOpacity>
    </View>
  )

  function gerarCodigo() {
    let codigo = Math.random()*1000000
    codigo = Math.ceil(codigo)
    return codigo
  }

  function createUser() {
    setIsLoading(true)
    Auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      if (isPaciente) {
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
            idProfissional,
            codigoSeguranca: gerarCodigo()
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
