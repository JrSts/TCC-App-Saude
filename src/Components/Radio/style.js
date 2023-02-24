import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({

  linhaSuperior: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: THEME.COLORS.GRAY
  },

  linhaInferior: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.GRAY
  },

  label: {
    fontSize: 18
  }

})
export default styles