import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaLogin from '../components/TelaLogin'; // Ajuste o caminho conforme sua estrutura
import InterfaceDocente from '../components/InterfaceDocente'; // Ajuste o caminho conforme sua estrutura
import RegistroPresenca from '../components/RegistroPresenca'; // Adicione o componente RegistroPresenca

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen 
          name="TelaLogin" 
          component={TelaLogin} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="InterfaceDocente" 
          component={InterfaceDocente} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegistroPresenca" 
          component={RegistroPresenca} 
          options={{ title: 'Registro de Presença' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
