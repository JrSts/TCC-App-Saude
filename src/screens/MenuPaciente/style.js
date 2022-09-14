import { StyleSheet } from 'react-native';
import THEME from './../../theme';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
  },

  cardContainer: { 
    width: "100%",
    height: "30%",   
    flexDirection: 'row',
    alignContent: 'center',
  },

  cardAtividade: {
    margin: 20,
    height: "70%",
    width: "40%",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.CARD1,
    borderRadius: 20,
  },

  cardLembrete: {
    margin: 20,
    height: "70%",
    width: "40%",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.CARD2,
    borderRadius: 20,
  },

  cardRelatorio: {
    margin: 20,
    height: "70%",
    width: "40%",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.CARD3,
    borderRadius: 20,
  },

  cardAnotacoes: {
    margin: 20,
    height: "70%",
    width: "40%",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.CARD4,
    borderRadius: 20,
  },

  cardLabel: {
    color: THEME.COLORS.PRIMARY1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',

  },

  headerContainer: {
    marginLeft: "5%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  login: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  cardContainer: { 
    width: "100%",
    height: "30%",   
    flexDirection: 'row',
    alignContent: 'center',
  },

});

export default styles;