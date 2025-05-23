import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaLogin from '../components/TelaLogin'; 
import InterfaceDocente from '../components/InterfaceDocente'; 
import RegistroPresenca from '../components/RegistroPresenca'; 
import Agenda from '../components/Agenda'; 
import RegistroOcorrencia from '../components/RegistroOcorrencia'; 
import Notas from '../components/Notas';

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
          name="RegistroOcorrencia" 
          component={RegistroOcorrencia} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegistroPresenca" 
          component={RegistroPresenca} 
          options={{ title: 'Registro de Presença' }} 
        />
        <Stack.Screen 
          name="Agenda" 
          component={Agenda} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Notas"
          component={Notas}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
