import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../componentes/Header';
import styles from './style';
import {useNavigation} from '@react-navigation/native'

const AdicionarAnotacoes = () => {
  const navigation = useNavigation();
    return (
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header name="Anotacoes"/>
        
        <TextInput
            placeholder="Crie um Anotacão aqui" 
            style={styles.textBox}
            multiline={true}
        />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity style={styles.containerButtonAnotacoes}>
            <Text style={styles.textButton}>Salvar Anotação</Text>
          </TouchableOpacity>
        </View>
        
      </KeyboardAvoidingView>
    )
}

export default AdicionarAnotacoes;