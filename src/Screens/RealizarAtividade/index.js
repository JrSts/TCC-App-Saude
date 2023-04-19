import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import CaixaLeituraDescrição from '../../Components/CaixaLeituraDescricao'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import Button from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'
import Firestore from '@react-native-firebase/firestore'
import DateTimePicker from "react-native-modal-datetime-picker";
import notifee, { AndroidImportance, EventType, TriggerType }  from '@notifee/react-native'

export default function RealizarAtividade({route}) {

  const item = route.params.item
  const [alarme, setAlarme] = useState('')
  const [dataLabel, setDatalabel] = useState('Cadastrar Alarme')
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation()

// notification

useEffect(() => {
  return notifee.onForegroundEvent(({type, detail}) => {
    switch(type){
      case EventType.DISMISSED:
        console.log('O usuario descartou a notificacao')
        break
      case EventType.ACTION_PRESS:
        console.log('O clicou na notificacao ', detail.notification)
        break
    }
  })
},[])

useEffect (() => {
  return notifee.onBackgroundEvent( async ({type, detail}) => {
    if (type == EventType.PRESS){
      console.log('Usuario Pressionou aqui', detail.notification);
    }
  })
},[])

async function scheduleNotification(date) {
   
  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime()
  }

  const channelId = await createChannelId()

  await notifee.createTriggerNotification(
    {
      title: `Alarme Atividade ${item.nome}`,
      body: 'Vamos fazer as atividades de hoje?', 
      android: { channelId, pressAction: {id: 'default'} }
    }, trigger)
  }

  async function createChannelId() {
    const channelId = await notifee.createChannel({
      id: 'alarme',
      name: 'Alarme',
      vibration: true,
      loopSound: true,
      sound: 'default',
      importance: AndroidImportance.HIGH
    })
    return channelId
  }

  useEffect(() => {
    const subscriber = Firestore().collection('Atividades')
      .onSnapshot(querySnapshot => {
        querySnapshot.docs.map( doc => {
          setAlarme(doc.data().alarme)
          return {
            id: doc.id,
            ...doc.data()
          }
        })
      })
    return () => subscriber()
  }, [alarme])
    
  function addAlarme(date){
    Firestore().collection('Atividades').doc(item.id).update({
      alarme: date
    })
    .then(() => console.log('Alarme Cadastrado com Sucesso!'))
  }

  function showDateTimePicker(){
    setIsDateTimePickerVisible(true)
  };
 
  function hideDateTimePicker() {
    setIsDateTimePickerVisible(false)
  };
 
  function handleDatePicked(date) {
    hideDateTimePicker()
    addAlarme(date)
    setAlarme(date)
    scheduleNotification(date)
      .then(() => console.log("notificação agendada com sucesso"))
      .catch((error) => console.log("O agendamento nao foi registrado.", error))
  };

  function format(number){
    if (number < 10)
      return '0'+number
    else
      return number
  }

  function finalizarTarefa() {
    Firestore().collection('Atividades').doc(item.id).update({
      status: true
    }).then(() => Alert.alert("Tarefa Finalizada!"))
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
        <View style={styles.boxBotton}>
          <TouchableOpacity 
            style={styles.buttons}
            onPress={() => navigation.navigate('Respostas', {item: item})}
          >
            <SimpleLineIcons name='control-play' size={60} style={styles.icons}/>
            <Text style={styles.buttonLabel}>Realizar Atividade</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.submitBox}>
          <Button title='Finalizar Tarefa' style={styles.submit} onPress={() => finalizarTarefa()}/>
        </View> */}
      </View>
    </SafeAreaView>
  )
}