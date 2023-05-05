import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native'
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
  const [avaliacao, setAvaliacao] = useState('')
  
  const item = route.params.item
  
  function addObservacao(){
    if (observacao != '') {
      Firestore().collection('Respostas').doc(item.id).update({
        observacao
      }).then(() => {
        if (avaliacao == ''){
          Alert.alert('Realizar Atividade', 'Sua observação foi registrada, atribua uma nota para finalizar a atividade.')
        }
      })
      .catch((error) => console.log(error))
    }

    if (avaliacao != '') {
      Firestore().collection('Respostas').doc(item.id).update({
        observacao,
        avaliacao,
        status: true,
        horario: new Date(Date.now())
      }).then(() => Alert.alert('Parabens!!!', 'Você conseguiu realizar esta atividade!'))
      .catch((error) => console.log(error))
      navigation.goBack()
    }

    if (avaliacao == '' && observacao == '') {
      Alert.alert('Atenção', 'Você não inseriu dados aqui, por favor faca uma observação ou uma avaliação e depois clique em Salvar Dados')
    }
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
        <CaixaTextoDescricao 
          title='Faça observações sobre a atividade (Optativo)' 
          onChangeText={setObservacao} 
          value={observacao}
        />
        <Text style={styles.subtitle}>Avaliação</Text>
        <Text style={[styles.subtitle, {textAlign: 'left'}]}>Qual foi o nível de dificuldade em {atividade.nome}?</Text>
        <ScrollView>
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
        </ScrollView>
        <View style={styles.containerButton}>
          <Button title='Salvar Dados' onPress={addObservacao} />
        </View>
      </View>
    </SafeAreaView>
  )
}