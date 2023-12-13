import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Phonenumber from './pages/Phonenumber';
import PhoneOtp from './pages/PhoneOtp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectCatogery from './pages/SelectCatogery';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Phone'
          component={Phonenumber}
          options={{
            headerTitle: 'Change',
            headerStyle: {
              backgroundColor: '#2B41B4',
            },
            headerShown:false
          }}
        />
        <Stack.Screen name='Otp' component={PhoneOtp} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Catogery' component={SelectCatogery} options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}