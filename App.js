import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Homepage from './src/screens/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResult from './src/components/SearchResult';
import FlightDetails from './src/screens/FlightDetails';
import ConfirmationScreen from './src/screens/ConfirmationScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };
  const Stack = createNativeStackNavigator();

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <Homepage />
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Home"
          component={Homepage}
        />
        <Stack.Screen name="Profile" component={Homepage} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="FlightDetails" component={FlightDetails} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
