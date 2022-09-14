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
    color: THEME.COLORS.CARD1
  },

  buttonUpdate: {
    borderRadius: 10,
  },

  buttonLabel: {
    color: THEME.COLORS.CARD4,
    fontWeight:'bold',
    fontSize: 15,
    padding: 5,
  },

  cardContainer: { 
    width: "100%",
    height: "15%",   
    flexDirection: 'row',
    alignContent:'center'  
  },

  cardAddAtividade: {
    marginVertical: 5,
    marginHorizontal: 20,
    height: "60%",
    width: "90%",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.CARD4,
    borderRadius: 20,
  },

  cardAddLembrete: {
    marginVertical: 5,
    marginHorizontal: 20,
    height: "80%",
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

  searchInput: {
    width:"90%",
    marginHorizontal: "5%",
    marginTop: "5%",
    backgroundColor: THEME.COLORS.PRIMARY2,
    fontSize: 18,

  },

  tableContainer: {
    width: "90%",
    height: "60%",
    borderColor: THEME.COLORS.PRIMARY2,
    margin: "5%",
  }

});

export default styles;