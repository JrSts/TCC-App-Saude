import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
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