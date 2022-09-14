import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"
import React from 'react'
import THEME from '../theme'

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.login}>
        <TouchableOpacity style={styles.login}>
          {/*<Text style={styles.buttonLabel}>Olá, {props.login}</Text> */} 
          <Icon name="user" size={25} style={styles.avatarLogin}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: "5%",
    marginHorizontal:'5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  login: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  avatarLogin: {
    paddingRight: "5%",
    color: THEME.COLORS.HEADER
  },

  buttonLabel: {
    color: THEME.COLORS.HEADER,
    fontWeight:'bold',
    fontSize: 15,
    padding: 5,
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: THEME.COLORS.HEADER
  },
});

export default Header;