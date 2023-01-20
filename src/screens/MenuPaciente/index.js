import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../MenuPaciente/style'
import Header from '../../componentes/Header'
import ProfileConteiner from '../../componentes/ProfileConteiner'
import { useNavigation } from '@react-navigation/native'

export default function MenuPaciente() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header name="Paciente" login="Login"/>
      <ProfileConteiner />
      
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardAtividade} onPress={ () => navigation.navigate("RealisarAtividade")}>
          <Text style={styles.cardLabel}>Atividades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardLembrete} onPress={ () => navigation.navigate("VisualisarLembrete")}>
          <Text style={styles.cardLabel}>Lembretes</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardRelatorio}>
          <Text style={styles.cardLabel}>Gerar{'\n'}Relatório</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardAnotacoes} onPress={ () => navigation.navigate("AdicionarAnotacoes")}>
          <Text style={styles.cardLabel}>Anotações</Text>
        </TouchableOpacity>
        </View>
      </View>
        
  )
}