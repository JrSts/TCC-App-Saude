import { Alert, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './styles'
import Input from '../../Components/Input'
import Firestore from '@react-native-firebase/firestore'
import Button from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'

export default function EditarPaciente({route}) {

  const navigation = useNavigation()
  const id = route.params.id
  const [hipotese, setHipotese] = useState('')
  const [nome, setNome] = useState('')

  useEffect(() => {
    const subscriber = Firestore()
    .collection('Pacientes')
    .onSnapshot(query => query.docs.map(doc => {
      if (doc.id == id){
        setHipotese(doc.data().hipotese)
        setNome(doc.data().nome)
      }
    }))
    return () => subscriber()
  }, [])
  
  function atualizarPaciente() {
    Firestore().collection('Pacientes').doc(id).update({
      hipotese
    }).then(() => Alert.alert('Paciente editado com sucesso!!'))
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Editar Paciente'/>
      <View style={styles.content}>
        <Text style={styles.label}>Atualize a Hipótese Diagnóstica de {nome}:</Text>
        <Input 
          title='Hipotese Diagnostica' 
          value={hipotese} 
          onChangeText={setHipotese} 
        />
      </View>
      <View style={styles.button}>
        <Button 
          title='Editar Hipótese'
          onPress={() => atualizarPaciente()}
        />
      </View>
    </SafeAreaView>
  )
}