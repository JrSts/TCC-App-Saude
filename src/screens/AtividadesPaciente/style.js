import { StyleSheet } from "react-native"
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center"
  },

  content: {
    flex: 9.2, 
    padding: 15,
  },

  filtro: {
    borderColor: THEME.COLORS.BUTTON,    
  },

  boxRegulator: {
    width: '45%',
  },

  labelSelector: {
    fontSize: 15
  },

  filtroContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: 'space-between'
  }
})

export default styles