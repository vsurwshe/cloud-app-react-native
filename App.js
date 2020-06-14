import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app123!</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
