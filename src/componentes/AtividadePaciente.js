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
      <View style={styles.buttonsEditDelete}>
        <TouchableOpacity onPress={() => navigation.navigate("MarcarHorario")}>
          <Icon name="alarm-outline" size={30} color={THEME.COLORS.PRIMARY1}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ListaAtividades')}>
          <Icon name="checkmark-circle-outline" size={30} color={THEME.COLORS.PRIMARY1}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdicionarObservacao')}>
          <Icon name="chatbubble-ellipses-outline" size={30} color={THEME.COLORS.PRIMARY1}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTask: {
    flexDirection: 'row',
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
    width: "65%",
    justifyContent: 'center'
  },

  buttonsEditDelete: {
    justifyContent: 'space-between',
    width: "30%",
    flexDirection: 'row',

  },
});

export default AtividadePaciente;