import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RegistroOcorrencia() {
  const [aluno, setAluno] = useState('');
  const [matricula, setMatricula] = useState('');
  const [turma, setTurma] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleEnviar = () => {
    if (aluno && matricula && turma && data && descricao) {
      Alert.alert('Ocorrência registrada com sucesso!');
      // Aqui você pode enviar os dados para um banco de dados ou API
      setAluno('');
      setMatricula('');
      setTurma('');
      setData('');
      setDescricao('');
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Ocorrência</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Aluno"
        value={aluno}
        onChangeText={setAluno}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Turma"
        value={turma}
        onChangeText={setTurma}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Data (dd/mm/aaaa)"
        value={data}
        onChangeText={setData}
        placeholderTextColor="#999"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição da Ocorrência"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
        <Text style={styles.botaoTexto}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FF', // azul clarinho
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // azul escuro
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#FFD700', // amarelo
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#003366', // azul escuro
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFD700', // amarelo
    fontSize: 18,
    fontWeight: 'bold',
  },
});
