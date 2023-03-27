import { StyleSheet, Platform}from 'react-native'
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS=='android'? 20 : 0
  },

  content :{
    flex: 11,
    padding: '3%',
  }, 

  containerTask: {
    paddingVertical: 5,
    flexDirection: "row",
    backgroundColor: THEME.COLORS.INPUT,
    alignItems:"center",
    justifyContent: "space-between",
    borderRadius: 20,
    marginBottom: 10,
  },

  avatar:{
    paddingHorizontal: 15,
    color: THEME.COLORS.BUTTON,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 2,
    color: THEME.COLORS.BUTTON,
  },

  idade: {
    fontSize: 15,
    paddingTop: 2,
    color: THEME.COLORS.BUTTON,
  }
})

export default styles