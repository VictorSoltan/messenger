import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function BlueButton(props) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium}); 
  
  let windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  const navigation = useNavigation();
  
  function checkPropsFunc(){
    if(props.func){
      if(!props.func()){
        loadScene()
      }
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
      <TouchableOpacity style={[styles.button, {padding: windowHeight*0.011}]} onPress={() => checkPropsFunc()}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>          
    )
  }
}    

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#112B66',
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
