import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { FontAwesome, FontAwesome5} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function ItemPaciente(props) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('AtividadesProfissional')}>
        <FontAwesome name='user-circle-o' size={50} style={styles.avatar}/>
          <View>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.idade}>{props.idade} Anos</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name='file-download' size={50} style={styles.avatar}/>
      </TouchableOpacity>
    </View>
  )
}