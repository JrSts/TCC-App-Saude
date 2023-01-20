import { StyleSheet} from 'react-native'
import THEME from './../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUNDCOLOR,
    padding: '5%',
  },

  title: {
    paddingTop: '5%',
    fontSize: 20,
    fontWeight:'bold',
    color: THEME.COLORS.CARD4,
    textAlign:'center',
  },
  
  inputComentario: {
    minHeight:120,
    maxHeight:120,
    marginTop: '2%',
    fontSize: 18,
    padding:'5%',
    borderRadius: 20,
    backgroundColor: THEME.COLORS.CARD2,
  },

  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 4,
    borderColor: THEME.COLORS.TEXT
  },
});

export default styles;