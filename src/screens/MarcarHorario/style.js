import { StyleSheet } from "react-native";
import THEME from "./../../theme"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUNDCOLOR,
  },

  title: {
    paddingTop: '5%',
    fontSize: 20,
    fontWeight:'bold',
    color: THEME.COLORS.CARD4,
    textAlign:'center',
  },

  containerHorario: {
    margin: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  
  containerRelogio: {
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  },
  
  labelHorario: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: '2%',
  },

  inputHour: {
    fontSize: 18,
    fontWeight: "bold",
    padding:'2%',
    borderRadius: 100,
    backgroundColor: THEME.COLORS.PRIMARY1,
  },
})

export default styles;