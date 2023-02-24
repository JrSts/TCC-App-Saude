import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  content: {
    flex: 11,
  },

  subtitle: {
    fontSize: 18,
    textAlign:"center",
    top: -25
  },

  box: {
    padding: 10,
    borderTopWidth: 0.5,
    justifyContent:"center",
    borderColor: THEME.COLORS.BUTTON
  },

  boxBotton: {
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent:"center",
    borderColor: THEME.COLORS.BUTTON
  },

  icons:{
    color: THEME.COLORS.BUTTON
  },

  buttons: {
    paddingHorizontal: 15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-around"
  },

  buttonLabel: {
    fontSize: 20,
    fontWeight: "bold"
  },

  submitBox: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: "flex-end", 
    bottom: 15,
  }

})

export default styles
