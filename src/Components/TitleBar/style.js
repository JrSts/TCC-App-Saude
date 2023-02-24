import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: THEME.COLORS.BUTTON,
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent:"center",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: THEME.COLORS.BUTTON,
  },
  
  button: {
    position: "absolute",
    top: 5,
    right: 15,
  },

  img: {
    color: THEME.COLORS.BUTTON,
  }
})

export default styles