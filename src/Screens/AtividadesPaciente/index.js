import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import AtividadePaciente from '../../Components/AtividadePaciente'
import Firestore from '@react-native-firebase/firestore'
import DropDownPicker from 'react-native-dropdown-picker'
import { FlatList } from 'react-native-gesture-handler'



export default function AtividadesPaciente() {
  const [isOpenTurnos, setIsOpenTurnos] = useState(false)
  const [currentValueTurnos, setCurrentValueTurnos] = useState()
  const [isOpenDias, setIsOpenDias] = useState(false)
  const [currentValueDias, setCurrentValueDias] = useState()
  const [atividade, setAtividade] = useState()
  const turnos = [
    {label: 'Manhã', value: 'M'},
    {label: 'Tarde', value: 'T'},
    {label: 'Noite', value: 'N'},
  ]
  const dias = [
    {label: 'Segunda', value: 'Seg'},
    {label: 'Terça', value: 'Ter'},
    {label: 'Quarta', value: 'Qua'},
    {label: 'Quinta', value: 'Qui'},
    {label: 'Sexta', value: 'Sex'},
    {label: 'Sábado', value: 'Sab'},
    {label: 'Domingo', value: 'Dom'},
  ]
  
  useEffect(() => {
    const subscriber = Firestore()
      .collection('Atividades')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setAtividade(data)
      })
  return () => subscriber()
  }, [])
  
  
    return (
      <SafeAreaView style={styles.container}>
        <TitleBar title='Atividades' />
        {/* <View style={styles.filtroContainer} zIndex={1}>
          <View style={styles.boxRegulator}>
            <DropDownPicker 
              items={dias} 
              open={isOpenDias}
              setOpen={() => setIsOpenDias(!isOpenDias)}
              value={currentValueDias}
              setValue={(val) => setCurrentValueDias(val)}
              placeholder='Selecione um Dia'
              placeholderStyle={styles.labelSelector}
              
            />
          </View>
          <View style={styles.boxRegulator}>
            <DropDownPicker 
              items={turnos} 
              open={isOpenTurnos}
              setOpen={() => setIsOpenTurnos(!isOpenTurnos)}
              value={currentValueTurnos}
              setValue={(val) => setCurrentValueTurnos(val)}
              placeholder='Selecione um Turno'
              placeholderStyle={styles.labelSelector}
            />
          </View>
        </View> */}
      <View style={styles.content}>

        <FlatList 
          data={atividade}
          renderItem={({item}) => <AtividadePaciente item={item}/>}
          keyExtractor={(item) => item.id}
        />
        
      </View>     
    </SafeAreaView>
  )
}