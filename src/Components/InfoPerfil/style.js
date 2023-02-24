import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10
  },
  desc: {
    fontSize: 20,
    padding: 5
  },
  img: {
    color: THEME.COLORS.BUTTON,
    paddingBottom: 20
  },
  editButton: {
    position: "absolute",
    top: -30,
    right: -75,
  },
  
  edit: {
    color: THEME.COLORS.EDIT,
  }
})

export default styles