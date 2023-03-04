import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import TitleBar from '../../Components/TitleBar'
import Input from '../../Components/Input'
import CaixaTextoDescricao from '../../Components/CaixaTextoDescricao'
import Radio from '../../Components/Radio'
import Check from '../../Components/Check'
import ButtonsOkCancel from '../../Components/ButtonsOkCancel'

export default function CadastrarAtividade() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade'/>
      <View style={styles.content}>
        <Text style={styles.subtitle} >
          Cadastro de Atividades
        </Text>
        <Input title="Nome da Atividade"/>
        <CaixaTextoDescricao title='Descrição da atividade'/>
        <Text style={styles.caracteristicas}>Periodicidade:</Text>
        <Radio />
        <Text style={styles.caracteristicas}>Turnos:</Text>
        <View style={styles.checkbox}>
          <Check/>  
          <Text style={styles.label}>Manhã</Text>
        </View>

        <View style={styles.checkbox}>
          <Check/>  
          <Text style={styles.label}>Tarde</Text>
        </View>

        <View style={styles.checkbox}>
          <Check/>  
          <Text style={styles.label}>Noite</Text>
        </View>
        <ButtonsOkCancel />
      </View>
    </SafeAreaView>
  )
}