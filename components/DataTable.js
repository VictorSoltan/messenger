import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import ArrowDown from '../assets/arrow_down.svg'

export default function DataTable(props) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  });   

  const rowTable = (e) => {
    return e.map((el, index) => {
      let styleName
      index === 0 ? styleName = 'header' : null
      return(
        <View style={[styles.cell, {width: 'auto'}, index === 0 ? {backgroundColor: '#EEEEEE', padding: '2%'} : {backgroundColor: 'white', } ]} key={index}>
          <Text style={[index === 0 ? {fontSize: 14, paddingTop: 3, paddingBottom: 3} : {fontSize: 11, paddingTop: 4, paddingBottom: 4}, {fontFamily: 'Poppins_400Regular', padding: 8}]}>
          {el!=='' ? el : '----'}
          </Text>
          {index === 0 ?
            <ArrowDown style={{width: 10, height: 6, marginLeft: 4, marginRight: 6}}/>

          : null
          }
            {/* <Image style={{width: 10, height: 6, marginLeft: 4, marginRight: 6}} source={ArrowDown}/>  */}
        </View>        
      )
    })  
  }

  const rowArray = (e) => {
    return [...Array(e.length).keys()].map((index) => {
      return(
        <View key={index} style={{width: 'auto'}}>
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
    borderColor: '#ddd',
  },    
})