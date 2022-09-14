import { StyleSheet } from "react-native";
import THEME from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: '1',
    width:'100%',
    height: '100%',
    backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
  },

  selectTurnoContainer:{
    marginVertical: '5%',
    marginHorizontal: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
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
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: '2%',
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

  inputHour: {
    fontSize: 18,
    fontWeight: "bold",
    padding:'2%',
    borderRadius: 100,
    backgroundColor: THEME.COLORS.PRIMARY1,

  },

  inputComentario: {
    marginHorizontal: '5%',
    minHeight:120,
    maxHeight:120,
    marginTop: '2%',
    fontSize: 18,
    padding:'5%',
    borderRadius: 20,
    backgroundColor: THEME.COLORS.CARD2,

  },

  questionText: {
    marginHorizontal: '5%',
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
    borderColor: THEME.COLORS.TEXT
  },

  labelQuestionText: {
    marginHorizontal: '5%',
    borderColor: THEME.COLORS.TEXT
  },

  button: {
    margin: '5%',
    paddingVertical: '5%',
    backgroundColor: THEME.COLORS.BUTTONOK,
    padding: 4,
    justifyContent: 'center',
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