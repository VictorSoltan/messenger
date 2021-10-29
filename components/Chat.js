import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Chat({ route }) {

  return(
    <View>
      <Text>{route.params.name}</Text>
    </View>
  )
}