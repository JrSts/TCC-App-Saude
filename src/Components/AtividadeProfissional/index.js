import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './style'
import THEME from '../../THEME'
import Icon from '@expo/vector-icons/FontAwesome'
import Firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native'


export default function AtividadeProfissional({item}) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.nome}</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={() => deleteTask()}>
          <Icon name='trash' size={40} color={THEME.COLORS.CANCEL}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate('EditarAtividade', {id: item.id})
          }
        }
        >
          <Icon name='pencil' size={40} color={THEME.COLORS.EDIT} />
        </TouchableOpacity>
      </View>
    </View>
  )

  function deleteTask() { 
    Alert.alert("Deletar Atividade", 
    "Antes de deletar esta tarefa, verifique se o download do relatorio já foi efetuado, pois você pode perder dados inportantes!!",
    [{
      text: 'Cancel',
      onPress: () => {} 
    },
    {
      text: 'Ok',
      onPress: () => {
        Firestore().collection("Atividades").doc(item.id.toString()).delete()
        .then(() => Alert.alert('Apagar Tarefa', "Tarefa apagada com sucesso!"))
      }
    }]
    )
  }
}