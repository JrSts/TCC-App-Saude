import { StyleSheet, Platform}from 'react-native'
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS=='android'? 20 : 0
  },

  content :{
    flex: 11,
    padding: '3%',
  }, 

  containerTask: {
    paddingVertical: 5,
    flexDirection: "row",
    backgroundColor: THEME.COLORS.INPUT,
    alignItems:"center",
    borderRadius: 20,
  },

  addser:{
    paddingLeft:'40%',
  },

  avatar:{
    paddingHorizontal: 15,
    color: THEME.COLORS.BUTTON,
  },

  infoContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 2,
    color: THEME.COLORS.BUTTON,
  },

  idade: {
    fontSize: 15,
    paddingTop: 2,
    color: THEME.COLORS.BUTTON,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default styles