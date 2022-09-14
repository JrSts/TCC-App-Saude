import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AtividadePaciente from '../../componentes/AtividadePaciente'
import styles from './style'
import Header from '../../componentes/Header';
import { useNavigation } from '@react-navigation/native';

export default function RealisarAtividade() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header name="Atividades"/>
           
      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ListaAtividades')}>
        <Text style={styles.textButton}>Escrever</Text>
      </TouchableOpacity> 
      <AtividadePaciente name="Dintar" style={styles.textButton}/>
      <AtividadePaciente name="Desenhar" style={styles.textButton}/>
      <AtividadePaciente name="Ler" style={styles.textButton}/>

    </View>
      
  )
}


