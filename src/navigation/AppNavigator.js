import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaLogin from '../components/TelaLogin'; // Ajuste o caminho conforme sua estrutura
import InterfaceDocente from '../components/InterfaceDocente'; // Ajuste o caminho conforme sua estrutura

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
          options={{ title: 'Docente' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;