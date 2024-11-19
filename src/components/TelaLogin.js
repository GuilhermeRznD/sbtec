import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Animated, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

const TelaLogin = () => {
  const [scaleValue] = useState(new Animated.Value(1));
  const [periodo, setPeriodo] = useState('');
  const [unidade, setUnidade] = useState('');

  const aoPressionar = () => {
    Animated.spring(scaleValue, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
  };

  const aoSoltar = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView contentContainerStyle={estilos.scrollContainer}>
      <ImageBackground
        source={require('../assets/images/login.png')}
        style={estilos.imagemFundo}
        resizeMode="cover"
      >
        <View style={estilos.tituloContainer}>
          <Text style={estilos.tituloLinha1}>DIÁRIO</Text>
          <Text style={estilos.tituloLinha2}>ELETRÔNICO</Text>
          <Text style={estilos.subtitulo}>(Professores)</Text>
        </View>
      </ImageBackground>

      <View style={estilos.curvaOndulada} />

      <View style={estilos.formulario}>
        {/* Unidade de Ensino */}
        <View style={estilos.inputContainer}>
          <Text style={estilos.label}>Unidade de Ensino</Text>
          <Picker
            selectedValue={unidade}
            onValueChange={(itemValue) => setUnidade(itemValue)}
            style={estilos.picker}
          >
            <Picker.Item label="Selecione a Unidade de Ensino" value="" />
            <Picker.Item label="Unidade 1" value="Unidade 1" />
            <Picker.Item label="Unidade 2" value="Unidade 2" />
            <Picker.Item label="Unidade 3" value="Unidade 3" />
          </Picker>
        </View>

        <View style={estilos.inputContainer}>
          <Text style={estilos.label}>Período Letivo</Text>
          <Picker
            selectedValue={periodo}
            onValueChange={(itemValue) => setPeriodo(itemValue)}
            style={estilos.picker}
          >
            <Picker.Item label="Selecione o Período Letivo" value="" />
            <Picker.Item label="2024.1" value="2024.1" />
            <Picker.Item label="2024.2" value="2024.2" />
          </Picker>
        </View>

        <View style={estilos.inputContainer}>
          <Text style={estilos.label}>Matrícula SIGRH</Text>
          <TextInput placeholder="" style={estilos.input} />
        </View>

        <View style={estilos.inputContainer}>
          <Text style={estilos.label}>Senha</Text>
          <TextInput placeholder="" style={estilos.input} secureTextEntry />
        </View>

        <TouchableOpacity onPress={() => console.log('Esqueceu sua senha?')} style={estilos.esqueceuSenhaContainer}>
          <Text style={estilos.esqueceuSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <Animated.View style={{ transform: [{ scale: scaleValue }], width: '100%' }}>
          <TouchableOpacity
            onPressIn={aoPressionar}
            onPressOut={aoSoltar}
            onPress={() => console.log('Entrar')}
            style={estilos.botao}
          >
            <Text style={estilos.textoBotao}>Entrar</Text>
            <Text style={estilos.iconeSeta}>&gt;</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imagemFundo: {
    width: '100%',
    height: height * 0.55, // Aumenta ligeiramente a altura da imagem para compensar
    justifyContent: 'flex-end', // Ajusta a posição do conteúdo para baixo da imagem
    alignItems: 'center',
    paddingBottom: 20, // Adiciona um espaço extra na parte inferior
  },
  tituloContainer: {
    alignItems: 'center',
    marginBottom: 20, // Adiciona um espaço extra abaixo do título
  },
  tituloLinha1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFA500',
    textAlign: 'left',
    marginLeft: -width * 0.25, // Ajuste relativo ao tamanho da tela
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  tituloLinha2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFA500',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: -8,
    marginLeft: -width * 0.1,
  },
  curvaOndulada: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -20,
  },
  formulario: {
    width: '85%',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    height: 40,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
    color: '#009688',
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: '#009688',
  },
  picker: {
    width: '100%',
    color: '#009688',
  },
  esqueceuSenhaContainer: {
    alignSelf: 'flex-end',
    marginTop: -10,
    marginBottom: 20,
  },
  esqueceuSenha: {
    color: '#009688',
    fontSize: 12,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#00796B',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  iconeSeta: {
    color: '#FFA500',
    fontSize: 20,
  },
});

export default TelaLogin;
