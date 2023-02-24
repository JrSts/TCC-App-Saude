import { View, SafeAreaView } from 'react-native'
import React from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import Input from '../../Components/Input'
import ItemPaciente from '../../Components/ItemPaciente/Index'
import ButtonAddPaciente from '../../Components/ButtonAddPaciente'

export default function ListarPacientes() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title="Pacientes"/>
      <View style={styles.content}>
        <Input title='Buscar Pacientes'/>
        <ItemPaciente name='Marcos Paulo' idade={10}/>
        <ItemPaciente name='Lara Sophya' idade={8}/>
      </View>
      <ButtonAddPaciente />
    </SafeAreaView>
  )
}