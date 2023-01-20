import { View, Text, TextInput, TouchableOpacity,  KeyboardAvoidingView, Pressable, Keyboard, ScrollView} from 'react-native'
import React from 'react'
import Header from './../../componentes/Header'
import styles from './style'
import Radio from './../../componentes/RadioAnalisarAtividades'
import { useNavigation } from '@react-navigation/native'

const ListaAtividades = () => {
  const navigation = useNavigation();
  
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <Text style={styles.title}>Escrever</Text>
        <ScrollView >
        <View style={styles.selectTurnoContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.turnoButton}> {"<"} </Text>
          </TouchableOpacity>

          <Text style={styles.textTurno}>Manhã</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.turnoButton}> {">"} </Text>
          </TouchableOpacity>
        </View>
        
        < Radio />
        
        </ScrollView>
        
      </Pressable>
      <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}> Concluir Tarefa </Text>
          </TouchableOpacity>
        </View> 
    </KeyboardAvoidingView>
  )
}

export default ListaAtividades;