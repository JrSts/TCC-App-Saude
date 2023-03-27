import { View, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import Icon from '@expo/vector-icons/FontAwesome5'
import AtividadeProfissional from '../../Components/AtividadeProfissional'
import THEME from '../../THEME'
import ButtonsAtividadesLembretes from '../../Components/ButtonsAtividadesLembretes'
import Firestore from '@react-native-firebase/firestore'
import Auth from "@react-native-firebase/auth"

export default function AtividadesProfissional({route}) {

  const idPaciente = route.params.id
  const userId = Auth().currentUser.uid
  const [atividade, setAtividade] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    const subscriber = Firestore()
      .collection('Atividades')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          } 
        });
        setAtividade(data)
        setLoading(false)
      })
    return () => subscriber();
  }, []);

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