import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import AtividadePaciente from '../../Components/AtividadePaciente'
import DropDownPicker from 'react-native-dropdown-picker'


export default function AtividadesPaciente() {
  const [isOpenTurnos, setIsOpenTurnos] = useState(false)
  const [currentValueTurnos, setCurrentValueTurnos] = useState()
  const [isOpenDias, setIsOpenDias] = useState(false)
  const [currentValueDias, setCurrentValueDias] = useState()
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
    return (
      <SafeAreaView style={styles.container}>
        <TitleBar title='Atividades' />
        <View style={styles.filtroContainer} zIndex={1}>
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
      </View>
      <View style={styles.content}>
        <AtividadePaciente name='Escrever' onPress='RealizarAtividade'/>
        
        <AtividadePaciente name='Ler' finish />
      </View>     
    </SafeAreaView>
  )
}