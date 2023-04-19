import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import THEME from '../../THEME'
import Icon from '@expo/vector-icons/FontAwesome'
import Firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native'


export default function AtividadeProfissional({item}) {

  const [idPaciente, setIdPaciente] = useState('')

  const idTask = item.id

  useEffect(() => {
    const subscriber = Firestore()
    .collection('Atividades')
    .onSnapshot(query => 
      query.docs.map(doc => {
        if (doc.id == idTask) {
          setIdPaciente(doc.data().idPaciente)
        }
    }))
  }, [])

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.nome}</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={() => deleteTask()}>
          <Icon name='trash' size={40} color={THEME.COLORS.CANCEL}/>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            Alert.alert("Editar Atividade", 
              "Para não perder dados, por favor baixe o relatorio do paciente antes de editar a atividade. Se deseja continuar editando pressione Ok."
              ,[
                {
                  text: 'Cancelar'
                },
                {
                  text: 'Ok',
                  onPress: () => {navigation.navigate('EditarAtividade', {id: item.id, idPaciente: idPaciente})}
                }
              ])
            
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
        Firestore()
          .collection("Respostas")
          .where('idAtividade', '==', item.id)
          .onSnapshot(query => query.docs.map(doc => {
            Firestore().collection('Respostas').doc(doc.id).delete()
          } ))
        Firestore().collection("Atividades").doc(item.id).delete()
        .then(() => Alert.alert('Apagar Tarefa', "Tarefa apagada com sucesso!"))
      }
    }]
    )
  }
}