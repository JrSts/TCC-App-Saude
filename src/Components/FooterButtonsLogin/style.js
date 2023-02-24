import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: '3%',
    paddingHorizontal: '3%',
  },
  
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
    textAlign: 'center',
    color: THEME.COLORS.BUTTON,
  },
  buttonLabel: {

  }
})

export default styles