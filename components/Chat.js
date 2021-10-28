import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
} from "@expo-google-fonts/dev";

export default function Chat({ route }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });
  return(
    <View>
      <Text>{route.params.name}</Text>
    </View>
  )
}