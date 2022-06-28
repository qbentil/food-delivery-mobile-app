import { SafeAreaView, Text, View } from 'react-native';

import CartScreen from './screens/Cart';
import HomeScreen from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './screens/Search';
import StartScreen from './screens/Start';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Start'>
    <Stack.Screen name="Start" component={StartScreen}  options = {{headerShown: false}}/>
    <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown: false}}/>
    <Stack.Screen name="Cart" component={CartScreen} options = {{headerShown: false}}/>
    <Stack.Screen name="Search" component={SearchScreen} options = {{headerShown: false}}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}

