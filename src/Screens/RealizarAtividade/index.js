import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import CaixaLeituraDescrição from '../../Components/CaixaLeituraDescricao'
import IconAlarm from 'react-native-vector-icons/Ionicons'
import IconMsg from 'react-native-vector-icons/MaterialCommunityIcons'
import IconLike from 'react-native-vector-icons/AntDesign'
import Button from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'
import Firestore from '@react-native-firebase/firestore'
import DateTimePicker from "react-native-modal-datetime-picker";

export default function RealizarAtividade() {

  useEffect(() => {
    const subscriber = Firestore().collection('Atividades')
      .onSnapshot(querySnapshot => {
        querySnapshot.docs.map( doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
      })
  
    return () => subscriber()
  }, [])

  const [dataLabel, setDatalabel] = useState('Cadastrar Alarme')
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)
  
  const navigation = useNavigation()

  function showDateTimePicker(){
    setIsDateTimePickerVisible(true)
  };
 
  function hideDateTimePicker() {
    setIsDateTimePickerVisible(false)
  };
 
  function handleDatePicked(date) {
    hideDateTimePicker();
    const labelButton = "Alarme para "+ date.getHours()+' : '+ date.getMinutes()
    setDatalabel(labelButton)
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade' />      
      <View style={styles.content}>
        <Text style={styles.subtitle}>Escrever</Text>
        <CaixaLeituraDescrição msg='Testando 123'/>
        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.buttons} 
            onPress={() => showDateTimePicker()}
          >
            <IconAlarm name='ios-alarm-outline' size={60} style={styles.icons}/>
            <Text style={styles.buttonLabel}>{dataLabel}</Text>
          </TouchableOpacity>
          <DateTimePicker 
            isVisible={isDateTimePickerVisible}
            onConfirm={handleDatePicked}
            onCancel={hideDateTimePicker}
            mode={'time'}
          />
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