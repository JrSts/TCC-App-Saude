import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import CaixaTextoDescricao from '../../Components/CaixaTextoDescricao'
import Button from '../../Components/Button'
import Firestore from '@react-native-firebase/firestore'
import { RadioButton } from 'react-native-paper'
import THEME from '../../THEME'
import { useNavigation } from '@react-navigation/native'

export default function GravarObservacao({route}) {
  const navigation = useNavigation()
  const atividade = route.params.atividade  
  const [observacao, setObservacao] = useState('')
  const [avaliacao, setAvaliacao] = useState(null)
  
  const item = route.params.item
  
  function addObservacao(){
    Firestore().collection('Respostas').doc(item.id).update({
      observacao,
      avaliacao,
      status: avaliacao != '' && observacao != '' ? true : false,
      horario: new Date(Date.now())
    })
    .then(() => Alert.alert('Dados salvos com sucesso!'))
    .catch((error) => console.log(error))
    navigation.goBack()
  }

  useEffect(() => {
    const subscriber = Firestore()
    .collection('Respostas')
    .onSnapshot(query => query.docs.map( doc => {
      if (doc.id == item.id){
        setObservacao(doc.data().observacao)
        setAvaliacao(doc.data().avaliacao)
      }
    }))
  
    return () => subscriber()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade' />
      <View style={styles.content}>
        <Text style={styles.subtitle}>{atividade.nome} - {item.diaDaSemana} pela {item.turno}</Text>
        <Text style={[styles.subtitle, {paddingBottom: 15}]}>Observação</Text>
        <CaixaTextoDescricao 
          title='Faça observações sobre a atividade' 
          onChangeText={setObservacao} 
          value={observacao}
        />
        <Text style={styles.subtitle}>Avaliação</Text>
        <Text style={[styles.subtitle, {textAlign: 'left' ,paddingBottom: 15}]}>Qual foi o nível de dificuldade em {atividade.nome}?</Text>
         {/* Radio */}
        <View>
          <TouchableOpacity onPress={() => {setAvaliacao('Muito Difícil')}} style={styles.linha}>
            <Text style={styles.label}>Muito Difícil</Text>
            <RadioButton
              value="Muito Difícil"
              status={ avaliacao === 'Muito Difícil' ? 'checked' : 'unchecked' }
              onPress={() => setAvaliacao('Muito Difícil')}
              color={THEME.COLORS.BUTTON}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setAvaliacao('Dificil')}} style={styles.linha}>
            <Text style={styles.label}>Dificil</Text>
            <RadioButton
              value="Dificil"
              status={ avaliacao === 'Dificil' ? 'checked' : 'unchecked' }
              onPress={() => setAvaliacao('Dificil')}
              color={THEME.COLORS.BUTTON}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setAvaliacao('Regular')}} style={styles.linha}>
            <Text style={styles.label}>Regular</Text>
            <RadioButton
              value="Regular"
              status={ avaliacao === 'Regular' ? 'checked' : 'unchecked' }
              onPress={() => setAvaliacao('Regular')}
              color={THEME.COLORS.BUTTON}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setAvaliacao('Fácil')}} style={styles.linha}>
            <Text style={styles.label}>Fácil</Text>
            <RadioButton
              value="Fácil"
              status={ avaliacao === 'Fácil' ? 'checked' : 'unchecked' }
              onPress={() => setAvaliacao('Fácil')}
              color={THEME.COLORS.BUTTON}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setAvaliacao('Muito Fácil')}} style={styles.linha}>
            <Text style={styles.label}>Muito Fácil</Text>
            <RadioButton
              value="Muito Fácil"
              status={ avaliacao === 'Muito Fácil' ? 'checked' : 'unchecked' }
              onPress={() => setAvaliacao('Muito Fácil')}
              color={THEME.COLORS.BUTTON}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <Button title='Salvar Dados' onPress={addObservacao} />
        </View>
      </View>
    </SafeAreaView>
  )
}