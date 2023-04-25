import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const style = StyleSheet.create({
  button: {
    flexDirection: "row",
    marginTop: 15,
    padding: 15,
    backgroundColor: THEME.COLORS.INPUT,
    borderRadius: 20,
    alignItems:"center",
  },

  buttonLabel: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    color: THEME.COLORS.BUTTON
  }
})

export default style