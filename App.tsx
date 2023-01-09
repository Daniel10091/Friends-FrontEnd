import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/components/screens';

import AppConfig from './config/app.config';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <StatusBar style={AppConfig.theme === 'dark' ? 'light' : 'dark'} />
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
