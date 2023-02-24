import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonAdd: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },
  img: {
    color: THEME.COLORS.BUTTON,
  }
})

export default styles