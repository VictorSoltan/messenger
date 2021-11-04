import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { Dimensions, StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import ArrowDown from '../assets/arrow_down.svg'

export default function DataTable(props) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  });   
    
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  const rowTable = (e) => {
    return e.map((el, index) => {
      return(
        <View style={[styles.cell, {width: 'auto'}, index === 0 ? {backgroundColor: '#EEEEEE', padding: windowHeight*0.005} : {backgroundColor: 'white', } ]} key={index}>
          {props.edit? 
            <TextInput style={[index === 0 ? {fontSize: 14} : {fontSize: 11}, {fontFamily: 'Poppins_400Regular', paddingHorizontal: windowWidth*0.025, paddingTop: windowHeight*0.0064, paddingBottom: windowHeight*0.0064}]}>
              {el!=='' ? el : '----'}
            </TextInput>
            :
            <Text style={[index === 0 ? {fontSize: 14} : {fontSize: 11}, {fontFamily: 'Poppins_400Regular', paddingHorizontal: windowWidth*0.025, paddingTop: windowHeight*0.0064, paddingBottom: windowHeight*0.0064}]}>
              {el!=='' ? el : '----'}
            </Text>
          }
          {index === 0 ?
            <ArrowDown style={{width: 10, height: 6, marginLeft: 4, marginRight: 6}}/>
          : null
          }
        </View>        
      )
    })  
  }

  const rowArray = (e) => {
    return [...Array(e.length).keys()].map((index) => {
      return(
        <View key={index} style={{width: 'auto', paddingBottom: windowHeight*0.008}}>
          {rowTable(e[index])}
        </View>            
    )})
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      rowArray(props.DataTableBase)
    )
  }
}

const styles = StyleSheet.create({   
  cell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },    
})