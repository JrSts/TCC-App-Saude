import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import CaixaLeituraDescrição from '../../Components/CaixaLeituraDescricao'

import { Ionicons, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import Button from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'
import Firestore from '@react-native-firebase/firestore'
import DateTimePicker from "react-native-modal-datetime-picker";

export default function RealizarAtividade({route}) {

  const item = route.params.item
  const [alarme, setAlarme] = useState()

  useEffect(() => {
    const subscriber = Firestore().collection('Atividades')
      .onSnapshot(querySnapshot => {
        querySnapshot.docs.map( doc => {
          setAlarme(doc.data().alarme)
          console.log('alarme', alarme)
          return {
            id: doc.id,
            ...doc.data()
          }
        })
      })
  
    return () => subscriber()
  }, [])

  function addAlarme(date){
    Firestore().collection('Atividades').doc(item.id).update({
      alarme: date
    })
    .then(() => Alert.alert('Alarme Cadastrado com Sucesso!'))
  }

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
    hideDateTimePicker()
    setAlarme(date)
    const labelButton = "Alarme para "+ format(date.getHours())+' : '+ format(date.getMinutes())
    setDatalabel(labelButton)
    addAlarme(date)
  };

  function format(number){
    if (number < 10)
      return '0'+number
    else
      return number
  }

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade' />      
      <View style={styles.content}>
        <Text style={styles.subtitle}>{item.nome}</Text>
        <CaixaLeituraDescrição msg='Testando 123'/>
        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.buttons} 
            onPress={() => showDateTimePicker()}
          >
            <Ionicons name='ios-alarm-outline' size={60} style={styles.icons}/>
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
            onPress={() => navigation.navigate('GravarObservacao', {item: item})}
          >
            <MaterialCommunityIcons name='message-processing-outline' size={60} style={styles.icons}/>
            <Text style={styles.buttonLabel}>Fazer Observações</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxBotton}>
          <TouchableOpacity 
            style={styles.buttons}
            onPress={() => navigation.navigate('AvaliarPaciente', {item: item})} 
                       
          >
            <AntDesign name='like2' size={60} style={styles.icons}/>
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