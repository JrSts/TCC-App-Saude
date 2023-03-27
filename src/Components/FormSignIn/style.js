import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal:'3%',
  },
  
  containerForm: {
    flex: 1
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: "5%",
    color: THEME.COLORS.BUTTON
  },

  buton: {
    fontSize: 18,
    padding: '5%',
    textAlign: 'center',
    color: THEME.COLORS.BUTTON
  },

  isFono: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  isFonoLabelOn : {
    fontSize: 20,
    color: THEME.COLORS.BUTTON,
    fontWeight: 'bold'
  },

  isFonoLabelOff : {
    fontSize: 20,
    color: THEME.COLORS.TEXT,
    fontWeight: 'bold'
  },

  containerButton: {
    paddingTop: 15,
    justifyContent: "flex-end",
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
  button: {
    padding: 10,
    backgroundColor: THEME.COLORS.INPUT,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "3%",
  },
  buttonLabel: {
    color: THEME.COLORS.BACKGROUND,
    fontSize: 20
  }
})

export default styles