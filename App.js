import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatsList from './components/ChatsList'
import Navigator from './routes/homeStack'

export default function App() {


  return (
    // <View style={styles.container}>
      <Navigator/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});
