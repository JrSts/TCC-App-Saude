import { StyleSheet, Platform}from 'react-native'
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Platform.OS=='android'? 20 : 0
  },
  content: {
    flex: 11,
    paddingHorizontal: "3%",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18
  },

  caracteristicas: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontSize: 18,
  },
  containerDias: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
  },
  
  buttonDias: {
    backgroundColor: THEME.COLORS.BUTTON,
    alignItems: 'center',
    justifyContent: 'center'

  },

  labelDias: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  labelDiasSelected: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.COLORS.BUTTON
  }
})

export default styles