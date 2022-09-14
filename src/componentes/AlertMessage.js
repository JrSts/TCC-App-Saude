import React, { useState } from 'react';
import { Alert } from 'react-native';

const AlertMessage = () => {
  return (
    Alert.alert('Excluir Tarefa', 'Tem certeza que deseja excluir esta tarefa?', [
      {
        text: 'Não',
       // onPress: () => console.log('Cancel Pressed'),
        style: 'nao',
      },
      { text: 'Sim', /*onPress: () => console.log('OK Pressed')*/ },
    ])
  );
}

export default AlertMessage;