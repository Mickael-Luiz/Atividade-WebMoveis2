import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Login from './android/app/src/pages/login/Login';
import Home from './android/app/src/pages/home/Home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divLogin: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '400px',
    width: '80%',
    backgroundColor: '#009600',
    borderRadius: '30px',
    boxShadow: '4px 4px 8px #333',
    padding: '10px',
  },

  input: {
    height: '30px',
    width: '250px',
    backgroundColor: '#fff',
    borderRadius: '5px'
  }

});

