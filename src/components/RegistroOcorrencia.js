
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, Platform, ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

export default function RegistroOcorrencia() {
  const [aluno, setAluno] = useState('');
  const [matricula, setMatricula] = useState('');
  const [turma, setTurma] = useState('');
  const [tipo, setTipo] = useState('');
  const [data, setData] = useState(new Date());
  const [hora, setHora] = useState(new Date());
  const [descricao, setDescricao] = useState('');
  const [mostrarData, setMostrarData] = useState(false);
  const [mostrarHora, setMostrarHora] = useState(false);

  const handleEnviar = () => {
    if (aluno && matricula && turma && tipo) {
      Alert.alert('Ocorrência registrada com sucesso!');
      setAluno('');
      setMatricula('');
      setTurma('');
      setTipo('');
      setDescricao('');
      setData(new Date());
      setHora(new Date());
    } else {
      Alert.alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Ocorrência</Text>

      <Text style={styles.label}>Nome do Aluno</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Aluno"
        value={aluno}
        onChangeText={setAluno}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Matrícula</Text>
      <TextInput
        style={styles.input}
        placeholder="Matrícula do Aluno"
        value={matricula}
        onChangeText={setMatricula}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Turma</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={turma} onValueChange={setTurma} style={styles.picker}>
          <Picker.Item label="Selecione a Turma" value="" />
          <Picker.Item label="1º Ano" value="1ano" />
          <Picker.Item label="2º Ano" value="2ano" />
          <Picker.Item label="3º Ano" value="3ano" />
        </Picker>
      </View>

      <Text style={styles.label}>Tipo de Ocorrência</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={tipo} onValueChange={setTipo} style={styles.picker}>
          <Picker.Item label="Selecione o Tipo" value="" />
          <Picker.Item label="Desrespeito ao professor" value="desrespeito" />
          <Picker.Item label="Agressão física" value="agressao" />
          <Picker.Item label="Dano ao patrimônio" value="patrimonio" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.dateButton} onPress={() => setMostrarData(true)}>
        <Text style={styles.dateText}>Selecionar Data: {data.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {mostrarData && (
        <DateTimePicker
          value={data}
          mode="date"
          display="default"
          onChange={(event, selected) => {
            const currentDate = selected || data;
            setMostrarData(Platform.OS === 'ios');
            setData(currentDate);
          }}
        />
      )}

      <TouchableOpacity style={styles.dateButton} onPress={() => setMostrarHora(true)}>
        <Text style={styles.dateText}>Selecionar Hora: {hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </TouchableOpacity>
      {mostrarHora && (
        <DateTimePicker
          value={hora}
          mode="time"
          display="default"
          onChange={(event, selected) => {
            const selectedTime = selected || hora;
            setMostrarHora(Platform.OS === 'ios');
            setHora(selectedTime);
          }}
        />
      )}

      <Text style={styles.label}>Descrição (opcional)</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
        <Ionicons name="checkmark-circle-outline" size={20} color="#FFF" />
        <Text style={styles.botaoTexto}>Registrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F0FF',
    padding: 20,
    paddingBottom: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    marginLeft: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#003366',
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  dateButton: {
    backgroundColor: '#FFF',
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  dateText: {
    fontWeight: 'bold',
    color: '#003366',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#003366',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
