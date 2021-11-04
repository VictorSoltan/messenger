import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import DataTable from "../components/DataTable";
import BlueButton from "../components/BlueButton";

export default function DataBase({ route }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  });  

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[styles.container]}>   
          <Text style={[{marginTop:'14%'}, {fontFamily: 'Poppins_700Bold', fontSize: 20}]}>{route.params.title}</Text>
          <View style={{width: '100%'}}>
            <ScrollView horizontal={true} style={{width: "100%", marginTop: 0}}>
              <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', width: "auto", paddingHorizontal: 40}}>
                <DataTable edit={true} DataTableBase={route.params.base} />
              </View>          
            </ScrollView>
          </View>     
          <View style={{position: 'absolute', bottom: '2%', width: '86%'}}>
            <BlueButton title="Save" link="DataBase"/>
          </View>  
        </View>   
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({   
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  chatHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '3%',
    paddingBottom: '6%'
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#112B66',
    borderRadius: 190,
    padding: '4%',
    paddingVertical: '30%'
  }
})