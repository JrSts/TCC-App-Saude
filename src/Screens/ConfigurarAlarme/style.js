import { StyleSheet, Platform}from 'react-native'
import THEME from "../../THEME";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS=='android'? 20 : 0
  },

  content: {
    flex: 11,
    paddingHorizontal: 15,
  },
  subtitle:{
    top: -25,
    fontSize: 20,
    textAlign: "center"
  },
  buttonBox: {
    flex: 1,
    justifyContent: "flex-end",
    bottom: 15,
  },
  button: {
    padding: 10,
    backgroundColor: THEME.COLORS.BUTTON,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "3%",
  },
  buttonLabel: {
    color: THEME.COLORS.BACKGROUND,
    fontSize: 20
  }
})

export default styles