import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  buttonOk: {
    backgroundColor: THEME.COLORS.BUTTON,
    padding: 10,
    borderRadius: 20,
    width: '40%',
    alignItems: "center",
  },
  buttonCancel: {
    backgroundColor: THEME.COLORS.CANCEL,
    padding: 10,
    borderRadius: 20,
    width: '40%',
    alignItems: "center",
  },
  buttonLabel: {
    color: THEME.COLORS.BACKGROUND,
    fontSize: 20,
  }
})

export default styles