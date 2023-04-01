import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import InfoPaciente from '../../Components/InfoPaciente'
import TitleBar from '../../Components/TitleBar'
import styles from './style'

export default function PerfilPaciente({route}) {
  const idPaciente = route.params.id
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title="Perfil"/>
      <View style={styles.content}>
        <InfoPaciente idPaciente={idPaciente} />
      </View>
    </SafeAreaView>
  )
}