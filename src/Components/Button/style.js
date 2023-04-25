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

  buttonBoxDisabled: {
    padding: 10,
    borderColor: THEME.COLORS.BUTTON,
    borderWidth: 2,
    backgroundColor: THEME.COLORS.BACKGROUND,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },

  buttonLabelDisabled: {
    color: THEME.COLORS.BUTTON,
    fontSize: 20,
    fontWeight: "bold"
  },

  buttonLabel: {
    color: THEME.COLORS.BACKGROUND,
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default styles