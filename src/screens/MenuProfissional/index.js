import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../componentes/Header';
import ProfileConteiner from '../../componentes/ProfileConteiner';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function MenuProfissional() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>   
      <Header name="Profissional" login="Login"/>
      <ProfileConteiner />
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardAddPaciente} onPress={() => navigation.navigate('CadastrarPaciente')}>
          <Text style={styles.cardLabel}>Cadastrar Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardSelectPaciente} onPress={() => navigation.navigate('SelecionarPaciente')}>
          <Text style={styles.cardLabel}>Meus{'\n'}Pacientes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}