import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View} from 'react-native';
import Input from '../../Components/Input';
import styles from './style';
import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';

export default function ValidarCodigo({route}) {

  const navigation = useNavigation()
  const [codigo, setCodigo] = useState('')
  const [chave, setChave] = useState('')
  const [idPaciente, setIdPaciente] = useState('')
  const [idProfissional, setIdProfissional] = useState('')

  const id = route.params.id
  const uidProfissional = Auth().currentUser.uid

  useEffect(() => {
    const subscriber = Firestore().collection('Profissional').where('id','==', uidProfissional)
    .onSnapshot(query => query.docs.map(doc => {
      setIdProfissional(doc.id)
    }))
  }, [uidProfissional])

  useEffect(() => {
    const subscriber = Firestore().collection('Pacientes')
      .where('id', '==', id)
      .onSnapshot(query => query.docs.map(doc => {
          setIdPaciente(doc.id)
          setCodigo(doc.data().codigoSeguranca)
      }))
    return () => subscriber()
  }, [id])

  function Validar() {
    if (chave == codigo) {
      AddPaciente()
    } else {
      Alert.alert('Codigo inválido')
      setChave('')
    }
  }
    
function AddPaciente() {
    Firestore().collection('Pacientes').doc(idPaciente).update({
      idProfissional: idProfissional
    })
    .then(() => {Alert.alert('Paciente adicionado'); navigation.goBack(), navigation.goBack() })
    .catch((error) => Alert.alert('ops deu erro: ', error))
  }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Informe o Código de Segurança do Paciente.</Text>
        <Input 
            title='Código de Segurança' value={chave} onChangeText={setChave}
        />
        <TouchableOpacity style={styles.button} onPress={() => Validar()}>
            <Text style={styles.buttonText}>Validar</Text>
        </TouchableOpacity>
    </View>
  );
};
