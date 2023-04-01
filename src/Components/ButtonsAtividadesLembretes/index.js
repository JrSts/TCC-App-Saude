import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function ButtonsAtividadeLembretes(props) { 

  const idPaciente = props.idPaciente
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonAtividade} 
        onPress={() => navigation.navigate('CadastrarAtividade', {idPaciente: idPaciente})}
      >
        <Text style={styles.buttonLabel}>
          Adicionar Atividade
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLembrete} onPress={ () => {
          navigation.navigate('CadastrarLembrete', {idPaciente: idPaciente})
        }}>
        <Text style={styles.buttonLabel}>
          Adicionar Lembrete
        </Text>
      </TouchableOpacity>
    </View>
  )
}