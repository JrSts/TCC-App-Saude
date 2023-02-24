import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import CaixaLeituraDescrição from '../../Components/CaixaLeituraDescricao'
import IconAlarm from 'react-native-vector-icons/Ionicons'
import IconMsg from 'react-native-vector-icons/MaterialCommunityIcons'
import IconLike from 'react-native-vector-icons/AntDesign'
import Button from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'


export default function RealizarAtividade(props) {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade' />      
      <View style={styles.content}>
        <Text style={styles.subtitle}>{props.name}Escrever</Text>
        <CaixaLeituraDescrição />
        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.buttons} 
            onPress={() => navigation.navigate('ConfigurarAlarme')}
          >
            <IconAlarm name='ios-alarm-outline' size={60} style={styles.icons}/>
            <Text style={styles.buttonLabel}>Cadastrar Alarme</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.buttons}
            onPress={() => navigation.navigate('GravarObservacao')}
          >
            <IconMsg name='message-processing-outline' size={60} style={styles.icons}/>
            <Text style={styles.buttonLabel}>Fazer Observações</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxBotton}>
          <TouchableOpacity 
            style={styles.buttons}
            onPress={() => navigation.navigate('AvaliarPaciente')}            
          >
            <IconLike name='like2' size={60} style={styles.icons}/>
            <Text style={styles.buttonLabel}>Avaliar o Paciente</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitBox}>
          <Button title='Finalizar Tarefa' style={styles.submit}/>
        </View>
      </View>
    </SafeAreaView>
  )
}