import { SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './styles'
import Input from '../../Components/Input'
import Firestore from '@react-native-firebase/firestore'
import Button from '../../Components/Button'

export default function EditarPaciente({route}) {

  const id = route.params.id
  const [idPaciente, setIdPaciente] = useState('')
  const [hipotese, setHipotese] = useState('')
  const [nome, setNome] = useState('')

  useEffect(() => {
    const subscriber = Firestore()
    .collection('Pacientes')
    .where('id', '==', id)
    .onSnapshot(query => query.docs.map(doc => {
      setHipotese(doc.data().hipotese)
      setIdPaciente(doc.id)
      setNome(doc.data().nome)
    }))
    return () => subscriber()
  }, [])
  
  function atualizarPaciente() {
    Firestore().collection('Pacientes').doc(idPaciente).update({
      hipotese
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Editar Paciente'/>
      <View style={styles.content}>
        <Text style={styles.label}>Atualize a Hipótese Diagnóstica do de {nome}:</Text>
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