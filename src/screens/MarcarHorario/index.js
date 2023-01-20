import { Text, TextInput, View } from "react-native";
import styles from './style'
import Switch from './../../componentes/Switch'


const hours = [0, 1, 2, 3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
const minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

  function format(valor){
    if (valor < 10) {
      return '0'+valor;
    } else {
      return valor;
    }
  }

const MarcarHorario = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escrever</Text>
      <View style={styles.containerHorario}>
        <Text style={styles.labelHorario}>Agendar Horário</Text>
        <Switch />
      </View>   
      <View style={styles.containerRelogio}>
        <TextInput placeholder={format(hours[0])} 
          style={styles.inputHour} 
          keyboardType='numeric' 
          maxLength={2}
        />
        <Text style={styles.labelHorario}>:</Text>
        <TextInput placeholder={format(minutes[0])} 
          style={styles.inputHour}
          keyboardType='numeric' 
          maxLength={2}
        />
      </View>
    </View>
  );
}
  
export default MarcarHorario;