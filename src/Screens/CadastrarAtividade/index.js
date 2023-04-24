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

export default function CadastrarAtividade({route}) {

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [observacao, setObservacao] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [alarme, setAlarme] = useState('');
  
  const [checkedManha, setCheckedManha] = useState(false);
  const [checkedTarde, setCheckedTarde] = useState(false);
  const [checkedNoite, setCheckedNoite] = useState(false);

  const [domingo, setDomingo] = useState(false)
  const [segunda, setSegunda] = useState(false)
  const [terca, setTerca] = useState(false)
  const [quarta, setQuarta] = useState(false)
  const [quinta, setQuinta] = useState(false)
  const [sexta, setSexta] = useState(false)
  const [sabado, setSabado] = useState(false)

  const [horario, setHorario] = useState('')

  const [diasDaSemana, setDiasDaSemana] = useState([])
  const [turnos, setTurnos] = useState([])

  function preencherTurnos() {
    let list = []
    if (checkedManha){
      list.push('Manhã')
    }
    if (checkedTarde){
      list.push('Tarde')
    }
    if (checkedNoite){
      list.push('Noite')
    }
    setTurnos(list)
  }

  function preencherDiasSemana(){
    let list = []
    if(domingo) {
      list.push('Domingo')
    } 
    if(segunda) {
      list.push('Segunda')
    } 
    if(terca) {
      list.push('Terça')
    } 
    if(quarta) {
      list.push('Quarta')
    } 
    if(quinta) {
      list.push('Quinta')
    } 
    if(sexta) {
      list.push('Sexta')
    } 
    if(sabado) {
      list.push('Sábado')
    }
    setDiasDaSemana(list)
  }

   useEffect(() => {
    preencherTurnos()
    preencherDiasSemana()
   }, [domingo, segunda, terca, quarta, quinta, sexta, sabado, checkedManha, checkedTarde, checkedNoite])

  const navigation = useNavigation()

  const idPaciente = route.params.idPaciente

  const AddAtividade = () => {
    try {
      Firestore().collection("Atividades").add({
        nome,
        descricao,
        alarme,
        idPaciente,
        diasDaSemana,
        turnos,
      }).then(res => {
        Alert.alert("Adicionar Atividade", "Atividade cadastrada com sucesso.")
        for (let i = 0; i < diasDaSemana.length; i++) {
          for (let j = 0; j < turnos.length; j++) {
            Firestore().collection("Respostas").add({
              idAtividade: res.id,
              observacao: '',
              avaliacao: '',
              diaDaSemana: diasDaSemana[i],
              turno: turnos[j],
              status: false,
              horario: '',
            }).then(() => console.log('ok'))
          }        
        }
      })
    }catch (error) {
      Alert.alert("Adicionar Atividade", "Atividade não cadastrada. Erro: " + error)
    }finally{
      navigation.goBack()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TitleBar title='Atividade'/>
      <View style={styles.content}>
        <Text style={styles.subtitle} >
          Cadastro de Atividades
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
        <ButtonsOkCancel ok={AddAtividade}/>
      </View>
    </SafeAreaView>
  )
}