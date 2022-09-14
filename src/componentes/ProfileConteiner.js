import { Text, View, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"
import React from 'react'
import THEME from './../theme'


 const ProfileConteiner = () => {
  
  return (
    <View style={styles.profileContainer}>
      <Icon name="user" size={100} style={styles.avatar}/>
      <View>
        <View>
          <Text style={styles.infoName}>Nome do Profissional</Text>
          <Text style={{color: THEME.COLORS.HEADER}}>Fonoaudiólogo</Text>
        </View> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: "20%",
  },

  avatar: {
    margin: 20,
    color: THEME.COLORS.HEADER
  },
  
  infoName: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
    color: THEME.COLORS.HEADER,
    //fontFamily: THEME.FONTS.BOLD
  },

});

export default ProfileConteiner;