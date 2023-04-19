import { View, Text, SafeAreaView, ActivityIndicator, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyleInput from '../../Components/Input/style'
import StyleButton from '../../Components/Button/style'
import styles from './style'
import Firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import Load from '../../Components/Load'
import THEME from '../../THEME'

export default function AtualizarPerfil({ route }) {

  const id = route.params.id

  const navigation = useNavigation()
  const [isFono, setIsFono] = useState(null);
  const [dataNascimento, setDataNascimento] = useState('')
  const [phone, setPhone] = useState('')
  const [hipotese, setHipotese] = useState('')
  const [apelido, setApelido] = useState('')
  const [nomeResponsavel, setNomeResponsavel] = useState('')
  const [nome, setNome] = useState('')
  const [CRFono, setCRFono] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [idPerfil, setIdPerfil] = useState('')

  function atualizarProfisisonal() {
    try {
      setIsLoading(true)
      Firestore()
        .collection('Profissional')
        .doc(id)
        .update({
          nome, 
          phone, 
          dataNascimento, 
          email,
          CRFono,
        })
    } catch (error) {
      Alert.alert('Atualizar Perfil', 'Dados não foram atualizados! erro: ' + error)
    } finally {
      setIsLoading(false)
      navigation.goBack()
    }
  }

  function atualizarPaciente(){
    try {
      setIsLoading(true)
      Firestore()
        .collection('Paciente')
        .doc(idPerfil)
        .update({
          nome, 
          phone, 
          dataNascimento, 
          email,
          apelido,
          nomeResponsavel,
          hipotese,
        })
    } catch (error) {
      Alert.alert('Atualizar Perfil', 'Dados não foram atualizados! erro: ' + error)
    } finally {
      setIsLoading(false)
      navigation.goBack()
    }
  }

  useEffect(() => {
    setIsLoading(true)
    const subscriber = Firestore()
      .collection('Profissional')
      .onSnapshot(query => {
        query.docs.map(doc => {
          if ( id == doc.id){
            setIsFono(true)
            setIdPerfil(doc.id)
            setNome(doc.data().nome)
            setPhone(doc.data().phone)
            setDataNascimento(doc.data().dataNascimento)
            setEmail(doc.data().email)
            setCRFono(doc.data().CRFono)
          }
        })
        setIsLoading(false)
      })
    return () => subscriber()
  }, [id])
  
  useEffect(() => {
    setIsLoading(true)
    const subscriber = Firestore()
      .collection('Pacientes')
      .onSnapshot(query => {
        query.docs.map(doc => {
          if (id == doc.id){
            setIsFono(false)
            setIdPerfil(doc.id)
            setNome(doc.data().nome)
            setApelido(doc.data().apelido)
            setHipotese(doc.data().hipotese)
            setEmail(doc.data().email)
            setPhone(doc.data().phone)
            setNomeResponsavel(doc.data().nomeResponsavel)
            setDataNascimento(doc.data().dataNascimento)
          }
        })
        setIsLoading(false)
      })
    return () => subscriber()
  }, [id])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Atualize seus dados</Text>
      <ScrollView style={styles.containerForm}>
        {
          isLoading ?
          <Load color={THEME.COLORS.BUTTON}/> :
        <View>
          <TextInput 
            style={StyleInput.input} 
            placeholder="Nome" 
            onChangeText={setNome}
            value={nome}
          />
          <TextInput 
            style={StyleInput.input} 
            placeholder="Telefone" 
            onChangeText={setPhone} 
            value={phone}
          />
          <TextInput 
            style={StyleInput.input} 
            placeholder="Data de Nascimento" 
            onChangeText={setDataNascimento} 
            value={dataNascimento}
          />
          <TextInput 
            style={StyleInput.input} 
            placeholder="E-mail" 
            onChangeText={setEmail} 
            value={email}
          />

          {isFono ?
            <TextInput 
              style={StyleInput.input} 
              placeholder="CRFono" 
              onChangeText={setCRFono} 
              value={CRFono}
            />
          : 
            <View>
              <TextInput 
                style={StyleInput.input} 
                placeholder="Apelido" 
                onChangeText={setApelido} 
                value={apelido}
              />
              <TextInput 
                style={StyleInput.input} 
                placeholder="Nome do Responsavel" 
                onChangeText={setNomeResponsavel} 
                value={nomeResponsavel}
              />
              <TextInput 
                style={StyleInput.input} 
                placeholder="Hipotese diagnostica" 
                onChangeText={setHipotese} 
                value={hipotese}
              />
            </View>
          } 
          </View>
        }
        
      </ScrollView>
      <View style={styles.containerButton}>
        <TouchableOpacity
         style={StyleButton.buttonBox}
         onPress={() => isFono? atualizarProfisisonal() : atualizarPaciente() }
        >
          {isLoading ? <Load color={THEME.COLORS.BACKGROUND} />  : <Text style={StyleButton.buttonLabel}>Atualizar</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}