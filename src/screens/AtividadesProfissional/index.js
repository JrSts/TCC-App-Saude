import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './style'
import TitleBar from '../../Components/TitleBar'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AtividadeProfissional from '../../Components/AtividadeProfissional'
import THEME from '../../THEME'
import ButtonsAtividadesLembretes from '../../Components/ButtonsAtividadesLembretes'

export default function AtividadesProfissional() {
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

        <AtividadeProfissional name='Desenhar' />
        <AtividadeProfissional name='Pintar' />

        <ButtonsAtividadesLembretes />
      </View>
    </SafeAreaView>
  )
}