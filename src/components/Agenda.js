import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

const Agenda = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState('provas');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [data, setData] = useState(new Date());
  const [tipo, setTipo] = useState('aulas');
  const [eventos, setEventos] = useState([]);
  const [mostrandoDatePicker, setMostrandoDatePicker] = useState(false);

  const formatarData = (data) => {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const salvarEvento = () => {
    setEventos([...eventos, { data: formatarData(data), tipo }]);
    setModalVisivel(false);
    setData(new Date());
    setTipo('aulas');
  };

  const renderCalendario = () => {
    const dias = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
      <View style={styles.calendario}>
        <View style={styles.semana}>
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map((dia) => (
            <Text style={styles.diaSemana} key={dia}>
              {dia}
            </Text>
          ))}
        </View>
        <View style={styles.mes}>
          {dias.map((dia) => {
            const eventosDia = eventos.filter(
              (e) => parseInt(e.data.split('/')[0]) === dia
            );
            const corEvento =
              eventosDia.find((e) => e.tipo === 'provas')
                ? styles.diaProva
                : eventosDia.find((e) => e.tipo === 'aulas')
                ? styles.diaAula
                : null;

            return (
              <TouchableOpacity
                key={dia}
                style={[
                  styles.dia,
                  corEvento,
                ]}
              >
                <Text style={styles.numeroDia}>{dia}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btnVoltar}>
            <Ionicons name="arrow-back" size={24} color="#6A1B9A" />
          </TouchableOpacity>
          <Text style={styles.titulo}>Agenda</Text>
          <View style={styles.seletorTipo}>
            <TouchableOpacity
              style={[
                styles.tipoBotao,
                tipoSelecionado === 'provas' && styles.tipoSelecionado,
              ]}
              onPress={() => setTipoSelecionado('provas')}
            >
              <Text style={styles.tipoTexto}>Provas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tipoBotao,
                tipoSelecionado === 'aulas' && styles.tipoSelecionado,
              ]}
              onPress={() => setTipoSelecionado('aulas')}
            >
              <Text style={styles.tipoTexto}>Aulas</Text>
            </TouchableOpacity>
          </View>
        </View>

        {renderCalendario()}

        <View style={styles.rodape}>
          <View style={styles.legenda}>
            <View style={[styles.legendaItem, styles.legendaProva]} />
            <Text style={styles.legendaTexto}>Prova</Text>
            <View style={[styles.legendaItem, styles.legendaAula]} />
            <Text style={styles.legendaTexto}>Aula</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => setModalVisivel(true)}>
        <Ionicons name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      <Modal visible={modalVisivel} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Evento</Text>
            <TouchableOpacity
              onPress={() => setMostrandoDatePicker(true)}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>
                Selecionar Data: {formatarData(data)}
              </Text>
            </TouchableOpacity>
            {mostrandoDatePicker && (
              <DateTimePicker
                value={data}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setMostrandoDatePicker(false);
                  if (selectedDate) {
                    setData(selectedDate);
                  }
                }}
              />
            )}
            <Picker
              selectedValue={tipo}
              onValueChange={(itemValue) => setTipo(itemValue)}
              style={styles.modalPicker}
            >
              <Picker.Item label="Aulas" value="aulas" />
              <Picker.Item label="Provas" value="provas" />
            </Picker>
            <TouchableOpacity style={styles.modalButton} onPress={salvarEvento}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#FF6347' }]}
              onPress={() => setModalVisivel(false)}
            >
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0E2C',
        padding: 25,
      },
      header: {
        paddingVertical: 30, // Mais espaço acima e abaixo
        backgroundColor: '#080527', // Fundo destacado para o cabeçalho
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
      btnVoltar: {
        position: 'absolute',
        left: 20,
        top: 20, // Ajustado para se alinhar com o novo layout
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      titulo: {
        marginTop: 20, // Garantir que o texto fique centralizado mesmo com ícones
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
      },
      seletorTipo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
  tipoBotao: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
  },
  tipoSelecionado: {
    backgroundColor: '#FFC745',
    color: '#FFFFFF',
  },
  tipoTexto: {
    color: '#000',
  },
  calendario: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },
  semana: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  diaSemana: {
    fontSize: 12,
    color: '#6A1B9A',
    textAlign: 'center',
    flex: 1,
  },
  mes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dia: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
  },
  diaMarcado: {
    backgroundColor: '#F5F5F5',
  },
  diaProva: {
    backgroundColor: '#6A1B9A',
    color: '#FFFFFF',
  },
  diaAula: {
    backgroundColor: '#F9DC5C',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  legenda: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendaItem: {
    width: 15,
    height: 15,
    borderRadius: 5,
    marginRight: 5,
  },
  legendaProva: {
    backgroundColor: '#6A1B9A',
  },
  legendaAula: {
    backgroundColor: '#F9DC5C',
  },
  legendaTexto: {
    color: '#FFFFFF',
    marginRight: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FFC745',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalPicker: {
    width: '100%',
    marginBottom: 10,
  },
  modalButton: {
    width: '100%',
    backgroundColor: '#6A1B9A',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Agenda;
