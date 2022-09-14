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
           placeholder="Crie um lembrete para seu paciente" 
           style={styles.textBox}
           multiline={true}
        />

        </ScrollView>
        
        {/*<TouchableOpacity style={styles.containerButton}>
          <Text style={styles.textButton}>Adicionar Lembrete</Text>
        </TouchableOpacity>*/}

      </View>
    )
}

export default AdicionarLembrete;