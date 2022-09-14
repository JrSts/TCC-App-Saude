import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper'
import React from 'react';
import styles from './style';
import Header from '../../componentes/Header';
import Paciente from '../../componentes/Paciente';
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';

export default function SelecionarPaciente() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <Header name="Selecionar Paciente" login="Login"></Header>
      <TextInput style={styles.searchInput}
        label='Pesquisar por nome'
        mode='outlined'
       />

      <ScrollView style={styles.tableContainer}>
        <Paciente name="José" lastName="Santana" age={7}/>
        <Paciente name="José" lastName="Santos" age={12}/>
        <Paciente name="Daniel" lastName="Santana" age={8}/>
        <Paciente name="Maria" lastName="Mendonça" age={5}/>
        <Paciente name="Paulo" lastName="Santana" age={6}/>
        <Paciente name="Larissa" lastName="Barbosa" age={9}/>
        <Paciente name="Valtenis" lastName="Santana" age={4}/>
        <Paciente name="Diego" lastName="Silva" age={6}/>
        <Paciente name="Matheus" lastName="Vieira" age={7}/>
        <Paciente name="Júnior" lastName="Santos" age={16}/>
      </ScrollView>
      
      
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardAddAtividade} onPress={() => navigation.navigate('CadastrarPaciente')}>
          <Text style={styles.cardLabel}>Adicionar Paciente</Text>
        </TouchableOpacity>

        {/*<TouchableOpacity style={styles.cardAddLembrete}>
          <Text style={styles.cardLabel}>Adicionar Lembrete</Text>
        </TouchableOpacity>*/}
      </View>
      
    </View>
  )
}