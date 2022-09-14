import { Text, View, KeyboardAvoidingView, TextInput, Pressable, Keyboard, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { TextInput as TextInputName} from 'react-native-paper';
import styles from './style';
import Radio from '../../componentes/RadioButton';
import Check from '../../componentes/CheckBox';
import Buttons from '../../componentes/ButtonsOkCancel'
import Header from '../../componentes/Header';

export default function AdicionarAtividade() { 
  const [checked, setChecked] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header name="Configurar Atividade"/>
      <ScrollView>
      <TextInputName 
        style={styles.inputName} 
        label='Nome da Atividade'
        mode='outlined'
      />
      <TextInput multiline={true} style={styles.textBox} placeholder='Descrição da atividade'/>
      <Text style={styles.label}>Periodicidade:</Text>
      <Radio />
      <Text style={styles.label}>Turnos:</Text>
      
      <View style={styles.ContainerCheckBox}>
        <Check />
        <Text style={styles.label}>Manhã</Text>
      </View>

      <View style={styles.ContainerCheckBox}>
        <Check />
        <Text style={styles.label}>Tarde</Text>
      </View>
      <View style={styles.ContainerCheckBox}>
        <Check />
        <Text style={styles.label}>Noite</Text>
      </View>  
      </ScrollView>
      

      <Buttons />
    </KeyboardAvoidingView>    
  )
}

