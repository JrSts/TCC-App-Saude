import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const style = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    padding: 15,
    backgroundColor: THEME.COLORS.INPUT,
    borderRadius: 20,
    alignItems:"center",
  },

  buttonLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.COLORS.BUTTON
  }
})

export default style