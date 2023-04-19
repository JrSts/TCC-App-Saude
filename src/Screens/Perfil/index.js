import { View, SafeAreaView } from 'react-native'
import React from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import InfoPerfil from '../../Components/InfoPerfil'

export default function Perfil({route}) {
  const id = route.params.id
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title="Perfil"/>
      <View style={styles.content}>
        <InfoPerfil id={id} />
      </View>
    </SafeAreaView>
  )
}