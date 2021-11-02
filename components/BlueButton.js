import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function DateEvents(props) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium}); 
  
  const navigation = useNavigation();
  
  function checkPropsFunc(){
    if(props.func){
      props.func()
      loadScene()
    }else{
      loadScene()
    }
  }

  const loadScene = () => {
    navigation.navigate(props.link, props.data)
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <TouchableOpacity style={styles.button} onPress={() => checkPropsFunc()}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>          
    )
  }
}    

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#112B66',
    padding: '3%',
    width: '100%',
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    color: '#F5F5F5'
  }
})
