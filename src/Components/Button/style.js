import { StyleSheet } from "react-native";
import THEME from "../../THEME"

const styles = StyleSheet.create({
  buttonBox: {
    padding: 10,
    backgroundColor: THEME.COLORS.BUTTON,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },

  buttonLabel: {
    color: THEME.COLORS.BACKGROUND,
    fontSize: 20
  }
})

export default styles