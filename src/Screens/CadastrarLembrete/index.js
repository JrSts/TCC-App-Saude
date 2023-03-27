import { View, SafeAreaView, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import TitleBar from  '../../Components/TitleBar'
import TextBox from '../../Components/CaixaTextoDescricao'
import styles from './style'
import Button from '../../Components/Button'
import Firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'

export default function CadastrarLembrete({route}) {

  const navigation = useNavigation()
  const idPaciente = route.params.idPaciente
  const [lembrete, setLembrete] = useState('')

  useEffect(() => {
    const subscriber = Firestore().collection('Pacientes')
      .onSnapshot(query => query.docs.map(doc => {
        if (doc.id == idPaciente && doc.data().lembrete != '') {
          setLembrete(doc.data().lembrete)
        }
      }))

    return () => subscriber()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Lembrete'/>
      <View style={styles.content}>
        <TextBox title='Deixe um lembrete para o paciente' onChangeText={setLembrete} value={lembrete}/>
        <Button title='Salvar Lembrete' onPress={salvarLembrete}/>
      </View>
    </SafeAreaView>
  )

  function salvarLembrete() {
    Firestore().collection('Pacientes').doc(idPaciente).update({
      lembrete: lembrete
    })
    .then(() => Alert.alert('lembrete Cadastrado'))
    .catch((error => console.log('Lembrete não Cadastrado, Erro: '+error)))
    navigation.goBack()
  }
}