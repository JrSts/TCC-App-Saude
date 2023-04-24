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

  function ordenarLista(lista){
    let vetor = lista

    for (let i = 0; i < vetor.length; i++){
        switch (vetor[i].diaDaSemana) {
            case 'Domingo' :
                vetor[i].diaDaSemana = 0;
                break;
            case 'Segunda' :
                vetor[i].diaDaSemana = 1;
                break;
            case 'Terça' :
                vetor[i].diaDaSemana = 2;
                break;
            case 'Quarta' :
                vetor[i].diaDaSemana = 3;
                break;
            case 'Quinta' :
                vetor[i].diaDaSemana = 4;
                break;
            case 'Sexta' :
                vetor[i].diaDaSemana = 5;
                break;
            case 'Sábado' :
                vetor[i].diaDaSemana = 6;
                break;
        }
        switch (vetor[i].turno) {
            case  'Manhã':
                vetor[i].turno = 0;
                break;
            case  'Tarde':
                vetor[i].turno = 1;
                break;
            case  'Noite':
                vetor[i].turno = 2;
                break;
        }
    }

    
    let vetorOrdenado = vetor.sort((a, b) => 
      a.diaDaSemana > b.diaDaSemana ? 1 : a.diaDaSemana < b.diaDaSemana ? -1 : 0
    )
    
    for (let i = 0; i < vetorOrdenado.length; i++){
        switch (vetorOrdenado[i].diaDaSemana) {
            case 0 :
                vetorOrdenado[i].diaDaSemana = 'Domingo'
                break
            case 1 :
                vetorOrdenado[i].diaDaSemana = 'Segunda'
                break
            case 2 :
                vetorOrdenado[i].diaDaSemana = 'Terça'
                break
            case 3 :
                vetorOrdenado[i].diaDaSemana = 'Quarta'
                break
            case 4 :
                vetorOrdenado[i].diaDaSemana = 'Quinta'
                break
            case 5:
                vetorOrdenado[i].diaDaSemana = 'Sexta'
                break
            case 6 :
                vetorOrdenado[i].diaDaSemana = 'Sábado'
                break
        }
        switch (vetorOrdenado[i].turno){
            case 0:
                vetorOrdenado[i].turno = 'Manhã'
                break
            case 1:
                vetorOrdenado[i].turno = 'Tarde'
                break
            case 2:
                vetorOrdenado[i].turno = 'Noite'
                break
        }
    }
    return vetorOrdenado
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
        let listaOrdenada = ordenarLista(data)
        setRespostas(listaOrdenada)
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
