import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Left from '../../assets/left.svg'
import Right from '../../assets/right.svg'

import BlueButton from "../../components/BlueButton";

export default function DateEvents({ navigation }) {
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

  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
  const months = [ 'January', 'February', 
    'March', 'April', 'May', 
    'June', 'July', 'August', 
    'September', 'October', 
    'November', 'December']

  let weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
  const loadScene = () => {
    navigation.navigate('DateEvents')
  }

  const today = new Date();

  let [lastMonth, setLastMonth]    = useState(null) 
  let [currentMonth, setCurrentMonth] = useState(today.getMonth())
  let [currentYear, setCurrentYear] = useState(today.getFullYear())
  let [nextMonth, setNextMonth] = useState(null)

  let [monthSeted, setMonthSeted] = useState(true)

  if(monthSeted){
    today.getMonth()!==0 ? setLastMonth(today.getMonth()-1) : setLastMonth(12)
    today.getMonth()!==11 ? setNextMonth(today.getMonth()+1) : setNextMonth(today.getMonth()-11)
    setMonthSeted(false)
  }

  function goBack() {
    lastMonth===0 ? setLastMonth(11) : setLastMonth(lastMonth-1)
    if(currentMonth===0){
      setCurrentMonth(11)
      setCurrentYear(currentYear-1)
    }else{
      setCurrentMonth(currentMonth-1)
    }
    nextMonth===0 ? setNextMonth(11) : setNextMonth(nextMonth-1)
  }

  function goForward() {
    lastMonth===11 ? setLastMonth(0) : setLastMonth(lastMonth+1)
    if(currentMonth===11){
      setCurrentMonth(0)
      setCurrentYear(currentYear+1)
    }else{
      setCurrentMonth(currentMonth+1)
    }
    nextMonth===11 ? setNextMonth(0) : setNextMonth(nextMonth+1)
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={styles.container}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', width: '100%', backgroundColor: '#FFFFE8', padding: '5%'}}>
          <Text style={{marginLeft: '12%', fontFamily: 'Poppins_500Medium', fontSize: 23}}>ShaMsiDDin</Text>
          <Text style={{marginBottom: 3, marginLeft: '3%', fontFamily: 'Poppins_500Medium', fontSize: 17, color: '#8A8A8A'}}>Kiev</Text>
        </View>    
        <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", marginTop: '3%', paddingHorizontal: '20%'}}>
          <TouchableOpacity style={{paddingVertical: '6%', paddingRight: '6%', paddingLeft: '6%'}} onPress={goBack}>
            <Left style={{width: 40, height: 80}}/>
          </TouchableOpacity>
              <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24}}>{months[currentMonth]} {currentYear}</Text>
          <TouchableOpacity style={{paddingVertical: '6%', paddingLeft: '6%', paddingRight: '6%'}} onPress={goForward}>
            <Right style={{width: 40, height: 60}}/>
          </TouchableOpacity>
        </View>     
        <ScrollView style={{width: '100%'}}>
          <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: windowHeight*0.01, paddingHorizontal: '7%'}}>
            {weekdaysShort.map((item, index) => {
              return(
                <View key={index} style={{width: '14.28%', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 12}}>{item}</Text>
                </View>
              )
            })}
          </View>
          <View style={{display: 'flex', flexWrap: 'wrap', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: windowHeight*0.013, paddingHorizontal: windowWidth*0.075}}>
            {
              [...Array(daysInMonth(lastMonth+1, today.getFullYear())).keys()].slice(-7+(1-(new Date(currentYear, currentMonth, 1).getDay()))).concat(
                [...Array(daysInMonth(currentMonth+1, today.getFullYear())).keys()].concat(
                  [...Array(daysInMonth(nextMonth+1, today.getFullYear())).keys()].slice(0, 14+7-(new Date(currentYear, currentMonth, daysInMonth(currentMonth+1, today.getFullYear())).getDay())  ))
              ).map((item, index) => {
              return(
                <TouchableOpacity onPress={loadScene} key={index} style={[styles.cell, item+7+(-1+(new Date(currentYear, currentMonth, 1).getDay()))===index ?
                  {backgroundColor: 'white', borderColor: '#112b66' } :
                  {borderColor: '#919db6', }, {paddingVertical: windowHeight*0.018} 
                ]}>
                  <Text style={[item+7+(-1+(new Date(currentYear, currentMonth, 1).getDay()))===index ? {color: '#000000'} : {color: '#b8b8b8'}, {fontSize: 16, fontFamily: 'Poppins_700Bold'}]} key={index}>{item+1}</Text>
                </TouchableOpacity>
              )
            })}      
          </View>
        </ScrollView>
        <View style={{position: 'absolute', bottom: '4%', width: '84%'}}>
          <BlueButton title='CHAT WITH MANAGER' link="Chat" />        
        </View>
      </View>
    )
  }
}    

const styles = StyleSheet.create({
  container: { 
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingTop: '10%'
  },
  cell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '14.28%',
    borderWidth: 1,
    borderRadius: 6
  },     
})