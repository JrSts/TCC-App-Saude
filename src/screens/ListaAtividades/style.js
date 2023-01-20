import { StyleSheet } from "react-native";
import THEME from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: '1',
    width:'100%',
    height: '100%',
    backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
  },

  title: {
    paddingTop: '5%',
    fontSize: 20,
    fontWeight:'bold',
    color: THEME.COLORS.CARD4,
    textAlign:'center',
  },

  selectTurnoContainer:{
    marginTop: '3%',
    marginHorizontal: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },

  textTurno: {
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.COLORS.CARD4
  },

  turnoButton: {
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 9,
    padding: 4,
    borderWidth: 2,
    borderColor: THEME.COLORS.TEXT
  },

  

  labelQuestionText: {
    marginHorizontal: '5%',
    borderColor: THEME.COLORS.TEXT
  },

  containerButton: {
    justifyContent: 'flex-end',
    marginVertical: '3%',
  },

  button: {
    marginHorizontal: '5%',
    padding: 20,
    backgroundColor: THEME.COLORS.BUTTONOK,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 50,
  },

  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.COLORS.PRIMARY1
  }
})

export default styles;