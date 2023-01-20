import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../componentes/Header';
import styles from '../AdicionarLembrete/style';
import {useNavigation} from '@react-navigation/native'

const AdicionarLembrete = () => {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Header name="Lembretes"/>
        <ScrollView >
        
        <TextInput
          placeholder="Digite aqui um Lembrete. " 
          style={styles.textBox}
          multiline={true}
        />

        </ScrollView>
        
        <TouchableOpacity style={styles.containerButton}>
          <Text style={styles.textButton}>Salvar Lembrete</Text>
        </TouchableOpacity>

      </View>
    )
}

export default AdicionarLembrete;