import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function ConfigurarAlarme() {

  const [selectedTime, setSelectedTime] = useState();
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };


  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade'/>
      <View style={styles.content} >
        <Text style={styles.subtitle}>Alarme - Escrever</Text>  
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={showTimePicker}>
            <Text style={styles.buttonLabel}>Adicionar Alarme</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode='time'
            onConfirm={handleConfirm}
            onCancel={hideTimePicker}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}