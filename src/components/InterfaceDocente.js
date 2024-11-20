import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const InterfaceDocente = () => {
  const [turmaSelecionada, setTurmaSelecionada] = useState('');
  const [etapaSelecionada, setEtapaSelecionada] = useState('');
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState('');
  const [telaAtiva, setTelaAtiva] = useState('Inicio');
  const [footerExpanded, setFooterExpanded] = useState(false);

  const handlePesquisar = () => {
    console.log('Pesquisar clicado');
  };

  const toggleFooter = () => {
    setFooterExpanded((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Docente Fulano!</Text>
        <Text style={styles.schoolYear}>Ano Letivo de 2024</Text>
        <Text style={styles.schoolName}>Diário Eletrônico Mobile</Text>
      </View>

      {/* Seção de Filtros */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filtro</Text>
        <View style={styles.filterRow}>
          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Turma</Text>
            <Picker
              selectedValue={turmaSelecionada}
              onValueChange={(itemValue) => setTurmaSelecionada(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="1º Ano" value="1ano" />
              <Picker.Item label="2º Ano" value="2ano" />
              <Picker.Item label="3º Ano" value="3ano" />
            </Picker>
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Etapa Bimestral</Text>
            <Picker
              selectedValue={etapaSelecionada}
              onValueChange={(itemValue) => setEtapaSelecionada(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="1ª Etapa" value="1etapa" />
              <Picker.Item label="2ª Etapa" value="2etapa" />
              <Picker.Item label="3ª Etapa" value="3etapa" />
            </Picker>
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Disciplina</Text>
            <Picker
              selectedValue={disciplinaSelecionada}
              onValueChange={(itemValue) => setDisciplinaSelecionada(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Matemática" value="matematica" />
              <Picker.Item label="Português" value="portugues" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={handlePesquisar}>
          <Text style={styles.searchButtonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View style={[styles.footer, footerExpanded && styles.footerExpanded]}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={toggleFooter}
        >
          <Ionicons
            name={footerExpanded ? "chevron-down-outline" : "chevron-up-outline"}
            size={24}
            color="#FFFFFF"
          />
          <Text style={styles.footerButtonText}>
            {footerExpanded ? "Fechar" : "Mais"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => setTelaAtiva('Notas')}
        >
          <Ionicons
            name="document-text-outline"
            size={24}
            color={telaAtiva === 'Notas' ? '#F9DC5C' : '#FFFFFF'}
          />
          <Text
            style={[
              styles.footerButtonText,
              telaAtiva === 'Notas' && styles.activeFooterButtonText,
            ]}
          >
            Notas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => setTelaAtiva('Relatorio')}
        >
          <Ionicons
            name="clipboard-outline"
            size={24}
            color={telaAtiva === 'Relatorio' ? '#F9DC5C' : '#FFFFFF'}
          />
          <Text
            style={[
              styles.footerButtonText,
              telaAtiva === 'Relatorio' && styles.activeFooterButtonText,
            ]}
          >
            Relatório
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo do rodapé expandido */}
      {footerExpanded && (
        <View style={styles.additionalOptions}>
          <TouchableOpacity style={styles.expandedOption}>
            <Ionicons name="book-outline" size={24} color="#FFFFFF" />
            <Text style={styles.expandedOptionText}>Registrar Aulas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.expandedOption}>
            <Ionicons name="checkmark-done-outline" size={24} color="#FFFFFF" />
            <Text style={styles.expandedOptionText}>Registrar Presença</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.expandedOption}>
            <Ionicons name="warning-outline" size={24} color="#FFFFFF" />
            <Text style={styles.expandedOptionText}>Ocorrências</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.expandedOption}>
            <Ionicons name="calendar-outline" size={24} color="#FFFFFF" />
            <Text style={styles.expandedOptionText}>Agenda</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#0E0E2C',
    width: '100%',
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  schoolYear: {
    fontSize: 16,
    color: '#ADB5BD',
    marginTop: 5,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F9DC5C',
    marginTop: 5,
  },
  filterContainer: {
    marginTop: -height * 0.08,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFD700',
    width: '90%',
    alignItems: 'center',
    padding: 15,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
    alignSelf: 'flex-start',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  filterItem: {
    flex: 1,
    marginHorizontal: 5,
  },
  filterLabel: {
    fontSize: 12,
    marginBottom: 5,
  },
  picker: {
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    height: 30,
  },
  searchButton: {
    position: 'absolute',
    right: 20,
    bottom: -15,
    backgroundColor: '#0E0E2C',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0E0E2C',
    width: '100%',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  footerButton: {
    alignItems: 'center',
    marginBottom: 10, 
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 5,
  },
  activeFooterButtonText: {
    color: '#F9DC5C',
    fontWeight: 'bold',
  },
  expandedOptionText: {
    fontSize: 12, 
    color: '#FFFFFF',
    marginTop: 3, 
    textAlign: 'center',
  },
  footerExpanded: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    backgroundColor: '#0E0E2C', 
    padding: 10, 
    width: '100%', 
    position: 'absolute',
    bottom: 0,
    height: height * 0.4, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  additionalOptions: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    flexWrap: 'wrap', 
    marginTop: 230, 
  },
  expandedOption: {
    alignItems: 'center', 
    margin: 10, 
    width: '40%', 
  },

});

export default InterfaceDocente;
