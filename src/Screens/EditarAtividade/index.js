import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import TitleBar from '../../Components/TitleBar'
import CaixaTextoDescricao from '../../Components/CaixaTextoDescricao'
import ButtonsOkCancel from '../../Components/ButtonsOkCancel'
import Firestore from '@react-native-firebase/firestore'
import { Checkbox } from 'react-native-paper'
import THEME from '../../THEME'
import Input from '../../Components/Input'
import { useNavigation } from '@react-navigation/native'

export default function EditarAtividade({route}) {

  const idTask = route.params.id

  const [checkedManha, setCheckedManha] = useState(false);
  const [checkedTarde, setCheckedTarde] = useState(false);
  const [checkedNoite, setCheckedNoite] = useState(false);
  const [observacao, setObservacao] = useState(false);
  const [avaliacao, setAvaliacao] = useState(false);
  const [alarme, setAlarme] = useState(false);

  const [domingo, setDomingo] = useState(false)
  const [segunda, setSegunda] = useState(false)
  const [terca, setTerca] = useState(false)
  const [quarta, setQuarta] = useState(false)
  const [quinta, setQuinta] = useState(false)
  const [sexta, setSexta] = useState(false)
  const [sabado, setSabado] = useState(false)
  
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  const navigation = useNavigation()
  useEffect(() => {
    const subscriber = Firestore().collection('Atividades')
    .onSnapshot(querySnapshot => {
      querySnapshot.docs.map(doc => {
        if (doc.id == idTask){
          setNome(doc.data().nome)
          setDescricao(doc.data().descricao)
          setDomingo(doc.data().diasDaSemana[0])
          setSegunda(doc.data().diasDaSemana[1])
          setTerca(doc.data().diasDaSemana[2])
          setQuarta(doc.data().diasDaSemana[3])
          setQuinta(doc.data().diasDaSemana[4])
          setSexta(doc.data().diasDaSemana[5])
          setSabado(doc.data().diasDaSemana[6])
          setCheckedManha(doc.data().turnos[0])
          setCheckedTarde(doc.data().turnos[1])
          setCheckedNoite(doc.data().turnos[2])
        }
      })
    })
    return () => subscriber()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade'/>
      <View style={styles.content}>
        <Text style={styles.subtitle} >
          Editar Atividades
        </Text>
        <Input title="Nome da Atividade"  onChangeText={setNome} value={nome}/>
        <CaixaTextoDescricao title='Descrição da atividade' onChangeText={setDescricao} value={descricao}/>
        <Text style={styles.caracteristicas}>Dias da semana:</Text>
        <View style={styles.containerDias}>

        <View style={styles.checkbox}>
        <Checkbox
            status={domingo ? 'checked' : 'unchecked'}
            onPress={() => {setDomingo(!domingo);}}
            color={THEME.COLORS.BUTTON}
            value={domingo}
          />  
          <Text style={domingo ? styles.labelDiasSelected : styles.label}>D</Text>
        </View>
        <View style={styles.checkbox}>
        <Checkbox
            status={segunda ? 'checked' : 'unchecked'}
            onPress={() => {setSegunda(!segunda);}}
            color={THEME.COLORS.BUTTON}
            value={segunda}
          />  
          <Text style={segunda ? styles.labelDiasSelected : styles.label}>S</Text>
        </View>
        <View style={styles.checkbox}>
        <Checkbox
            status={terca ? 'checked' : 'unchecked'}
            onPress={() => {setTerca(!terca);}}
            color={THEME.COLORS.BUTTON}
            value={terca}
          />  
          <Text style={terca ? styles.labelDiasSelected : styles.label}>T</Text>
        </View>
        <View style={styles.checkbox}>
        <Checkbox
            status={quarta ? 'checked' : 'unchecked'}
            onPress={() => {setQuarta(!quarta);}}
            color={THEME.COLORS.BUTTON}
            value={quarta}
          />  
          <Text style={quarta ? styles.labelDiasSelected : styles.label}>Q</Text>
        </View>
        <View style={styles.checkbox}>
        <Checkbox
            status={quinta ? 'checked' : 'unchecked'}
            onPress={() => {setQuinta(!quinta);}}
            color={THEME.COLORS.BUTTON}
            value={quinta}
          />  
          <Text style={quinta ? styles.labelDiasSelected : styles.label}>Q</Text>
        </View>
        <View style={styles.checkbox}>
        <Checkbox
            status={sexta ? 'checked' : 'unchecked'}
            onPress={() => {setSexta(!sexta);}}
            color={THEME.COLORS.BUTTON}
            value={sexta}
          />  
          <Text style={sexta ? styles.labelDiasSelected : styles.label}>S</Text>
        </View>
        <View style={styles.checkbox}>
        <Checkbox
            status={sabado ? 'checked' : 'unchecked'}
            onPress={() => {setSabado(!sabado);}}
            color={THEME.COLORS.BUTTON}
            value={sabado}
          />  
          <Text style={sabado ? styles.labelDiasSelected : styles.label}>S</Text>
        </View>
        </View>
        <Text style={styles.caracteristicas}>Turnos:</Text>
        <View style={styles.checkbox}>
          <Checkbox
            status={checkedManha ? 'checked' : 'unchecked'}
            onPress={() => {setCheckedManha(!checkedManha);}}
            color={THEME.COLORS.BUTTON}
            value={checkedManha}
          />  
          <Text style={styles.label}>Manhã</Text>
        </View>

        <View style={styles.checkbox}>
          <Checkbox
            status={checkedTarde ? 'checked' : 'unchecked'}
            onPress={() => {setCheckedTarde(!checkedTarde);}}
            color={THEME.COLORS.BUTTON}
            value={checkedTarde}
          />  
          <Text style={styles.label}>Tarde</Text>
        </View>

        <View style={styles.checkbox}>
          <Checkbox
            status={checkedNoite ? 'checked' : 'unchecked'}
            onPress={() => {setCheckedNoite(!checkedNoite);}}
            color={THEME.COLORS.BUTTON}
            value={checkedNoite}
          /> 
          <Text style={styles.label}>Noite</Text>
        </View>
        <ButtonsOkCancel ok={updateAtividade}/>
      </View>
    </SafeAreaView>
  )

  function updateAtividade(){
    Firestore().collection('Atividades').doc(idTask).update({
      nome: nome,
      descricao: descricao,
      diasDaSemana: [domingo, segunda, terca, quarta, quinta, sexta, sabado],
      turnos: [checkedManha, checkedTarde, checkedNoite],
    })
    navigation.goBack()
    Alert.alert('Atualizar Atividade', 'Atividade Atualizada com sucesso')
  }
}