import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../componentes/Header'
import styles from './style'
import Atividade from '../../componentes/Atividade'
import { useNavigation } from '@react-navigation/native'

export default function AtividadesCadastradas(){
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header name="Lista de Atividades" />
      <ScrollView>
          <Atividade name="Desenhar" />
          <Atividade name="Pintar" />
          <Atividade name="Escrever" />
          <Atividade name="Ler" />
      </ScrollView>
      
      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate("AdicionarAtividade") }>
        <Text style={styles.textButton}>Adicionar Atvidade</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</Text>
      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate("AdicionarLembrete") }>
        <Text style={styles.textButton}>Adicionar Lembrete</Text>
      </TouchableOpacity>
 
    </View>
  )
}