import { View, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import Icon from '@expo/vector-icons/FontAwesome5'
import AtividadeProfissional from '../../Components/AtividadeProfissional'
import THEME from '../../THEME'
import ButtonsAtividadesLembretes from '../../Components/ButtonsAtividadesLembretes'
import Firestore from '@react-native-firebase/firestore'

export default function AtividadesProfissional({route}) {

  const [idPaciente, setIdPaciente] = useState('')
  const [idTask, setIdTask] = useState('')
  const [atividade, setAtividade] = useState([])
  const [loading, setLoading] = useState(true)
  const id = route.params.id

  useEffect(() => {
    const subscriber = 
      Firestore()
      .collection('Pacientes')
      .where('id','==', id)
      .onSnapshot(query => {
        query.docs.map(doc => {
          setIdPaciente(doc.id)
        })
      })
      return () => subscriber()
  }, [id])

  useEffect(() => {
    setLoading(true)
    const subscriber = Firestore()
      .collection('Atividades')
      .where('idPaciente','==', idPaciente)
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          setIdTask(doc.id)
          return {
            id: doc.id,
            ...doc.data()
          } 
        });
        setAtividade(data)
        setLoading(false)
      })
    return () => subscriber();
  }, [idPaciente]);

  return (

    <SafeAreaView style={styles.container}>
      <TitleBar title="Atividades"/>
      <View style={styles.content}>
        <TouchableOpacity>
          <Icon 
            name='file-download'
            size={40}
            style={styles.img}
            color= {THEME.COLORS.BUTTON}
          />
        </TouchableOpacity>

        <FlatList
          data={atividade}
          renderItem={(({item}) => {
             return <AtividadeProfissional 
              item={item}
            />
            }
          )}
          keyExtrator={(item) => item.id}
        />
        <ButtonsAtividadesLembretes idPaciente={idPaciente}/>
      </View>
    </SafeAreaView>
  )
}