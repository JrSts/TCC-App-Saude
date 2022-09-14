import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native'
import React from 'react'
import Header from './../../componentes/Header'
import Switch from './../../componentes/Switch'
import styles from './style'
import Radio from './../../componentes/RadioAnalisarAtividades'
import { useNavigation } from '@react-navigation/native'


const hours = [0, 1, 2, 3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
const minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

function format(valor){
  if (valor < 10) {
    return '0'+valor 
  } else {
    return valor
  }
}

{/*
  function nextHour() {

}

function prevHour(){

}

function nextMin(){

}

function prevMin(){

}
*/}


const ListaAtividades = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Header name="Escrever"/>
      <View style={styles.selectTurnoContainer}>
        <TouchableOpacity>
          <Text style={styles.turnoButton}> {"<"} </Text>
        </TouchableOpacity>

        <Text style={styles.textTurno}>Manhã</Text>
        <TouchableOpacity>
          <Text style={styles.turnoButton}> {">"} </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerHorario}>
        <Text style={styles.labelHorario}>Agendar Horário</Text>
        <Switch />
      </View>   
      <View style={styles.containerRelogio}>
        <TextInput placeholder='00' style={styles.inputHour} keyboardType='numeric' maxLength={2}/>
        <Text style={styles.labelHorario}>:</Text>
        <TextInput placeholder='00' style={styles.inputHour} keyboardType='numeric' maxLength={2}/>
      </View>
      < Radio />
      <Text style={styles.questionText}>
          Escreva uma observalção:  
      </Text>
      <Text style={styles.labelQuestionText}>(Opicional)</Text>
      <TextInput placeholder='Comentario' multiline style={styles.inputComentario}/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}> Concluir Tarefa </Text>
      </TouchableOpacity>
    </Pressable>
    
  )
}

export default ListaAtividades;