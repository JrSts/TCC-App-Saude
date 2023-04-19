import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import Firestore from '@react-native-firebase/firestore'
import THEME from '../../THEME'
import Load from '../../Components/Load'
import { useNavigation } from '@react-navigation/native'

export default function Respostas({route}) {
  const Atividade = route.params.item
  const [respostas, setRespostas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  function ItemResposta({item}) {
    const navigation = useNavigation()
    return(
      <TouchableOpacity 
        style={styles.containerItem} 
        onPress={() => navigation.navigate('GravarObservacao', {item: item, atividade: Atividade})}
      >
        <View>
          <Text style={styles.titleItem}>{Atividade.nome}</Text>
          <Text style={styles.subtitleItem}>{item.diaDaSemana} pela {item.turno}</Text>
        </View>
        <View style={styles.containerButtons}>
          <AntDesign 
            name={item.status ? 'checkcircleo': 'hourglass'}
            color={item.status ? 'green' : 'red'}
            size={40} 
          />
        </View>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    setIsLoading(true)
    const subscriber = Firestore()
      .collection('Respostas')
      .where('idAtividade', '==', Atividade.id)
      .onSnapshot(query => {
        const data = query.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setRespostas(data)
        setIsLoading(false)
    })
    return () => subscriber
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Respostas' />
      <View style={styles.content}>
        {
          isLoading ?
            <Load color={THEME.COLORS.BUTTON}/>
          :
          <FlatList 
            data={respostas}
            renderItem={({item}) => {return <ItemResposta item={item}/>}}
            keyExtractor={(item) => item.id}
          />
        }
      </View>
    </SafeAreaView>
  )
}
