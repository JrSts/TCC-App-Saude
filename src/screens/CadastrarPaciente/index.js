import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper'
import Button from '../../componentes/ButtonsOkCancel'
import styles from './style'
import { useNavigation } from '@react-navigation/native';

export default function CadastrarPaciente() {
  const navigation = useNavigation();

  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro do paciente</Text>
      <ScrollView>
      <TextInput style={styles.input}
        label="Nome"
        value={text}
        onChange={text => setText(text)}
        mode="outlined"
      />

      <TextInput style={styles.input}
        label="Apelido"
        value={text}
        onChange={text => setText(text)}
        mode="outlined"
      />

      <TextInput style={styles.input}
        label="Idade"
        value={text}
        onChange={text => setText(text)}
        mode="outlined"
      />

      <TextInput style={styles.input}
        label="Nome do Responsável"
        value={text}
        onChange={text => setText(text)}
        mode="outlined"
      />

      <TextInput style={styles.input}
        label="Hipótese Diagnóstica"
        value={text}
        onChange={text => setText(text)}
        mode="outlined"
      />

      <TextInput style={styles.input} 
        label="Telefone"
        value={text}
        onChange={text => setText(text)}
        mode="outlined"
      />
      </ScrollView>
      <Button />
    </View>
  );
}