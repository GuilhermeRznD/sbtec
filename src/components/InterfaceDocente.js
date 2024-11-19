import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const InterfaceDocente = () => {
  const [cursoSelecionado, setCursoSelecionado] = useState(''); // Estado para o curso selecionado

  const handleFiltrar = () => {
    console.log('Filtro aplicado para o curso:', cursoSelecionado);
  };

  return (
    <View style={estilos.container}>
      {/* Cabeçalho */}
      <View style={estilos.header}>
        <Text style={estilos.headerTitle}>Bem-vindo</Text>
        <Text style={estilos.headerSubtitle}>
          Página do <Text style={estilos.headerHighlight}>Docente</Text>
        </Text>
      </View>

      {/* Filtros */}
      <View style={estilos.filterContainer}>
        <View style={estilos.filterFieldset}>
          <Text style={estilos.filterLegend}>Filtros</Text>
          <View style={estilos.selectGroup}>
            <Text style={estilos.selectLabel}>Selecione um Curso</Text>
            <Picker
              selectedValue={cursoSelecionado}
              onValueChange={(itemValue) => setCursoSelecionado(itemValue)}
              style={estilos.selectInput}
            >
              <Picker.Item label="Curso 1" value="curso1" />
              <Picker.Item label="Curso 2" value="curso2" />
              <Picker.Item label="Curso 3" value="curso3" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={estilos.button} onPress={handleFiltrar}>
          <Text style={estilos.buttonText}>Filtrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  header: {
    padding: 20,
    width: '100%',
    textAlign: 'left',
    paddingLeft: 30,
    backgroundColor: '#0e0e2c',
  },
  headerTitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#adb5bd',
  },
  headerHighlight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f9dc5c',
  },
  filterContainer: {
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 15,
    elevation: 5, // Adiciona sombra ao contêiner de filtros
  },
  filterFieldset: {
    borderWidth: 2,
    borderColor: '#FFD700',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
  },
  filterLegend: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    fontSize: 14,
    marginLeft: 5,
  },
  selectGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  selectLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 12,
    color: '#333',
  },
  selectInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  button: {
    marginTop: 15,
    width: 100,
    backgroundColor: '#000080',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default InterfaceDocente;
