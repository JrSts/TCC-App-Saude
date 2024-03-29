import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  name: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center"
  },

  desc: {
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  },

  deleteButton: {
    color: THEME.COLORS.CANCEL,
  },

  containerButtons:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal: 30
  },

  img: {
    color: THEME.COLORS.BUTTON,
    paddingVertical: 20,
    alignSelf: "center"
  },
  
  edit: {
    color: THEME.COLORS.EDIT,
  },
})

export default styles