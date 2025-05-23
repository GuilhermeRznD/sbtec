
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const alunosExemplo = [
  { nome: 'Ana Clara Silva Ribeiro', ativo: 'SIM' },
  { nome: 'Bianca Machado Alves', ativo: 'SIM' },
  { nome: 'Carlos Henrique Rocha', ativo: 'SIM' },
  { nome: 'João Pedro Lima', ativo: 'SIM' },
  { nome: 'Gabriela Souza Costa', ativo: 'SIM' },
];

const TelaNotasFinal = () => {
  const [turma, setTurma] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [etapa, setEtapa] = useState('');
  const [tipoAtividade, setTipoAtividade] = useState('Normal');
  const [alunos, setAlunos] = useState(alunosExemplo);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cadastrar/Alterar Atividade</Text>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Turma</Text>
          <Picker
            selectedValue={turma}
            onValueChange={setTurma}
            style={styles.picker}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="1º Ano" value="1ano" />
            <Picker.Item label="2º Ano" value="2ano" />
          </Picker>

          <Text style={styles.label}>Disciplina</Text>
          <Picker
            selectedValue={disciplina}
            onValueChange={setDisciplina}
            style={styles.picker}
          >
            <Picker.Item label="Selecione a disciplina" value="" />
            <Picker.Item label="Matemática" value="matematica" />
            <Picker.Item label="Português" value="portugues" />
          </Picker>

          <Text style={styles.label}>Etapa da Matrícula</Text>
          <Picker
            selectedValue={etapa}
            onValueChange={setEtapa}
            style={styles.picker}
          >
            <Picker.Item label="Selecione a etapa" value="" />
            <Picker.Item label="1ª Etapa" value="1etapa" />
            <Picker.Item label="2ª Etapa" value="2etapa" />
          </Picker>

          <Text style={styles.label}>Tipo de Atividade</Text>
          <Picker
            selectedValue={tipoAtividade}
            onValueChange={setTipoAtividade}
            style={styles.picker}
          >
            <Picker.Item label="Normal" value="Normal" />
            <Picker.Item label="Extra" value="Extra" />
          </Picker>
        </View>

        <Text style={styles.alunoHeader}>⬆ Lista de Alunos</Text>
        <View style={styles.tabela}>
          <View style={styles.headerLinha}>
            <Text style={[styles.colunaAluno, styles.bold]}>Aluno</Text>
            <Text style={[styles.colunaNota, styles.bold]}>Nota</Text>
            <Text style={[styles.colunaNota, styles.bold]}>Recup.</Text>
            <Text style={[styles.colunaPequena, styles.bold]}>Detalhes</Text>
            <Text style={[styles.colunaPequena, styles.bold]}>Ativo</Text>
          </View>
          {alunos.map((aluno, index) => (
            <View style={styles.linhaAluno} key={index}>
              <Text style={styles.colunaAluno}>{aluno.nome}</Text>
              <TextInput style={styles.inputNota} keyboardType="numeric" />
              <TextInput style={styles.inputNota} keyboardType="numeric" />
              <Text style={styles.linkDetalhes}>detalhes</Text>
              <Text style={styles.colunaPequena}>{aluno.ativo}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.botaoSalvar}>
          <Text style={styles.textoBotao}>Salvar Notas</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#030E4F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#F49F1C',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formSection: { marginBottom: 20 },
  label: { fontWeight: 'bold', marginTop: 10 },
  picker: {
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginTop: 5,
  },
  alunoHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#030E4F',
    marginBottom: 10,
  },
  tabela: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 8,
  },
  headerLinha: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  linhaAluno: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  colunaAluno: {
    flex: 2,
    fontSize: 12,
  },
  colunaNota: {
    flex: 1.1,
    fontSize: 12,
    textAlign: 'center',
  },
  colunaPequena: {
    flex: 1.2,
    fontSize: 12,
    textAlign: 'center',
  },
  inputNota: {
    flex: 0.7,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
    marginHorizontal: 2,
  },
  linkDetalhes: {
    flex: 1.1,
    fontSize: 12,
    color: '#007AFF',
    textAlign: 'center',
  },
  botaoSalvar: {
    backgroundColor: '#030E4F',
    marginTop: 20,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  }
});

export default TelaNotasFinal;
