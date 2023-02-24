import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 20,
  },
  
  buttonAtividade: {
    width: '40%',
    padding: 10,
    backgroundColor: THEME.COLORS.BUTTON,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "5%",
    borderRadius: 20
  },

  buttonLembrete: {
    width: '40%',
    padding: 10,
    backgroundColor: THEME.COLORS.EDIT,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "5%",
    borderRadius: 20
  },

  buttonLabel:{
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.COLORS.BACKGROUND,
  },
})

export default styles