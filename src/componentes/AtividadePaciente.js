import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React  from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import THEME from './../theme'
import { useNavigation } from '@react-navigation/native'

const AtividadePaciente = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerTask}>
      <TouchableOpacity style={styles.buttonTask} onPress={() => navigation.navigate('Atividade')}>
        <Text style={styles.textTask}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTask: {
    alignItems: 'center',
    padding: "4%",
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "5%",
    backgroundColor: THEME.COLORS.PRIMARY4,
    borderRadius: 15
  },

  textTask: {
    color: THEME.COLORS.PRIMARY1,
    fontSize: 18
  },

  buttonTask: {
    width: "100%",
  },

});

export default AtividadePaciente;