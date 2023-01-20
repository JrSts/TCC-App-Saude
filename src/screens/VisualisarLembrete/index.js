import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../componentes/Header';
import styles from '../VisualisarLembrete/style';
import {useNavigation} from '@react-navigation/native'

const VisualisarLembrete = () => {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Header name="Lembretes"/>
        <ScrollView >
        <View style={styles.textBox}>
           <Text style={styles.text}>
                Aqui vai um lembrete pare te auxiliar. 
           </Text>
        </View>

        </ScrollView>

      </View>
    )
}

export default VisualisarLembrete;