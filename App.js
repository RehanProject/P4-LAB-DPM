import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MatchScreen from './src/screens/MatchScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <MatchScreen />
    </SafeAreaView>
  );
};

export default App;
