import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React  from 'react'
import THEME from './../theme'
import { useNavigation } from '@react-navigation/native'
import AlertMessage from './../componentes/AlertMessage'

const Atividade = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerTask}>
        <Text style={styles.textTask}>{props.name}</Text>
      <View style={styles.buttonsEditDelete}>
        <TouchableOpacity onPress={() => AlertMessage()}>
          <Icon name="trash-o" size={30} color={THEME.COLORS.PRIMARY1}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdicionarAtividade')}>
          <Icon name="pencil" size={30} color={THEME.COLORS.PRIMARY1}/>
        </TouchableOpacity>
      </View>     
    </View>
  )
}

const styles = StyleSheet.create({
  containerTask: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "4%",
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "5%",
    backgroundColor: THEME.COLORS.ALERT,
    borderRadius: 15
  },

  textTask: {
    color: THEME.COLORS.PRIMARY1,
    fontSize: 18
  },

  buttonsEditDelete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "30%",
  },

});

export default Atividade;