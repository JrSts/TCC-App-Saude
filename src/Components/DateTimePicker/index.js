import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker'

export default function MyDateTimePicker() {

  const [DatePickerVisible, setDatePickerVisible] = useState(false)

  function ShowDatePicker(){
     setDatePickerVisible(true)
  }

  function hideDatePicker(){
    setDatePickerVisible(false)
  }

  function handleDatePicker(dateTime) {
    const currentTime = Date.now()
      if (dateTime.getTime() < currentTime){
        Alert.alert('Impossivel cadastrar alarme para o passado, por favor selecione uma horário futuro.')
        hideDatePicker()
        return
      }
      hideDatePicker()
  }

  return (
    <DateTimePicker 
      mode='time'
      isVisible={DatePickerVisible}
      onConfirm={handleDatePicker}
      onCancel={hideDatePicker}
    />
  )
}
