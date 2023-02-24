import { StyleSheet } from "react-native"
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    padding: 15, 
    backgroundColor: THEME.COLORS.INPUT,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 15,
  },

  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  name:{
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.COLORS.BUTTON
  },

  button:{
    paddingHorizontal: 15,
  }
  
})

export default styles