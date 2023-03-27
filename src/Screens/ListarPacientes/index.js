import { View, SafeAreaView, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import TitleBar from '../../Components/TitleBar'
import styles from './style'
import Input from '../../Components/Input'
import ButtonAddPaciente from '../../Components/ButtonAddPaciente'
import Firestore from '@react-native-firebase/firestore'
import THEME from '../../THEME'
import { FontAwesome, FontAwesome5} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function ListarPacientes() {
  const [paciente, setPaciente] = useState([])
  const [loading, setLoading] = useState(true)
  const [idade, setIdade] = useState(0)
  const [idPaciente, setIdPaciente] = useState('')

  function getIdade(nascimento){
    let anoString = nascimento.substring(6,10)
    let mesString = nascimento.substring(3,5)
    let diaString = nascimento.substring(0,2)
    let data = anoString+'-'+mesString+'-'+diaString

    let teste = new Date(data)

    const ano = teste.getFullYear()
    const mes = teste.getMonth()
    const dia = teste.getDate()

    const today = new Date()
    
    if (today.getMonth() <= mes) {
      setIdade(today.getFullYear() - ano - 1)
    } else if (today.getDate() < dia) {
      setIdade(today.getFullYear() - ano - 1)
    } else {
      setIdade(today.getFullYear() - ano)
    }
    return idade
  }

  useEffect(() => {
    setLoading(true)
    const subscriber = Firestore()
      .collection('Pacientes')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          getIdade(doc.data().dataNascimento)
          setIdPaciente(doc.id)
          return {
            id: doc.id,
            ...doc.data()
          } 
        });
        setPaciente(data)
        setLoading(false)
      })
    return () => subscriber();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title="Pacientes"/>
      <View style={styles.content}>
        <Input title='Buscar Pacientes'/>
          <View>
            { loading ? <ActivityIndicator color={THEME.COLORS.BUTTON} style={{marginTop: 230}}/> : 
              <FlatList 
                data={paciente}
                renderItem={({item}) => {return <ItemPaciente item={item} />}}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            }
          </View>
      </View>
      <ButtonAddPaciente />
    </SafeAreaView>
  )

  function ItemPaciente( { item } ) {
    const navigation = useNavigation()
    return (
      <View style={styles.containerTask}>
        <TouchableOpacity 
          style={styles.containerTask} 
          onPress={() => navigation.navigate('AtividadesProfissional', {id: idPaciente})}
        >
          <FontAwesome name='user-circle-o' size={50} style={styles.avatar}/>
            <View>
              <Text style={styles.name}>{item.nome}</Text>
              <Text style={styles.idade}>{idade} Anos</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity> 
          <FontAwesome5 name='file-download' size={45} style={styles.avatar}/>
        </TouchableOpacity>
      </View>
    )
  }
}