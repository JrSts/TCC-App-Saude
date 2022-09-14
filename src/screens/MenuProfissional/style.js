import { StyleSheet } from 'react-native';
import THEME from './../../theme';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: THEME.COLORS.CARD4
  },

  cardContainer: { 
    width: "100%",
    height: "30%",   
    flexDirection: 'row',
    alignContent: 'center',
  },

  cardAddPaciente: {
    margin: 20,
    height: "70%",
    width: "40%",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.CARD1,
    borderRadius: 20,
  },

  cardSelectPaciente: {
    margin: 20,
    height: "70%",
    width: "40%",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.CARD2,
    borderRadius: 20,
  },

  cardLabel: {
    color: THEME.COLORS.PRIMARY1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',

  }

});

export default styles;