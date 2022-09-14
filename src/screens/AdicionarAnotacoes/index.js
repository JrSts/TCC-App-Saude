import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../componentes/Header';
import styles from './style';
import {useNavigation} from '@react-navigation/native'

const AdicionarAnotacoes = () => {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Header name="Anotacoes"/>
        <ScrollView >
        <TextInput
           placeholder="Crie um Anotacão para seu paciente" 
           style={styles.textBox}
           multiline={true}
        />

        </ScrollView>
        
        <TouchableOpacity style={styles.containerButtonLembretes}>
          <Text style={styles.textButton}>Salvar Anotação</Text>
        </TouchableOpacity>

      </View>
    )
}

export default AdicionarAnotacoes;