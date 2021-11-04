import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Left from '../../assets/left.svg'
import Right from '../../assets/right.svg'

import BlueButton from "../../components/BlueButton";

export default function DateEvents({ navigate }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  }); 

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
    
  const months = [ 'January', 'February', 
    'March', 'April', 'May', 
    'June', 'July', 'August', 
    'September', 'October', 
    'November', 'December']  
  
  const today = new Date();

  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }

  let [yesterday, setYesterday] = useState(null)
  let [todaysDay, setTodayDay]    = useState(today.getDate()) 
  let [tomorrow, setTomorrow] = useState(null)
  let [lastMonth, setLastMonth]    = useState(null) 
  let [currentMonth, setCurrentMonth] = useState(today.getMonth())
  let [nextMonth, setNextMonth] = useState(null)
  let [currentYear, setCurrentYear] = useState(today.getFullYear())

  let [daySeted, setDaySeted] = useState(true)
  let [monthSeted, setMonthSeted] = useState(true)


  if(monthSeted){
    today.getMonth()!==0 ? setLastMonth(today.getMonth()-1) : setLastMonth(12)
    today.getMonth()!==11 ? setNextMonth(today.getMonth()+1) : setNextMonth(today.getMonth()-11)
    setMonthSeted(false)
  }

  let daysInCurrentMonth = daysInMonth(currentMonth+1, currentYear)

  if(daySeted){
    today.getDate()!==0 ? setYesterday(today.getDate()-1) : setYesterday(daysInCurrentMonth)
    today.getDate() !== daysInCurrentMonth ? setTomorrow(today.getDate()+1) : setTomorrow(1)
    setDaySeted(false)
  }

  function goBack() {
    if(todaysDay !== 1){
      setTodayDay(todaysDay-1)
    }else{
      setTodayDay(daysInMonth(currentMonth, currentYear))
      lastMonth===0 ? setLastMonth(11) : setLastMonth(lastMonth-1)
      if(currentMonth===0){
        setCurrentMonth(11)
        setCurrentYear(currentYear-1)
      }else{
        setCurrentMonth(currentMonth-1)
      }
      nextMonth===0 ? setNextMonth(11) : setNextMonth(nextMonth-1)
    }
    yesterday !== 1 ? setYesterday(yesterday-1) : setYesterday(daysInMonth(currentMonth, currentYear))
    tomorrow !== 1 ? setTomorrow(tomorrow-1) : setTomorrow(daysInMonth(currentMonth+1, currentYear))  
  }

  function goForward() {
    if(todaysDay !== daysInCurrentMonth){
      setTodayDay(todaysDay+1)
    }else{
      setTodayDay(1)
      if(lastMonth===11){
        setLastMonth(0)
      }else{
        setLastMonth(lastMonth+1)
      }
    if(currentMonth===11){
      setCurrentMonth(0)
      setCurrentYear(currentYear+1)
    }else{
      setCurrentMonth(currentMonth+1)
    }
    nextMonth===11 ? setNextMonth(0) : setNextMonth(nextMonth+1)
    }
    if(todaysDay === daysInMonth(currentMonth+1, currentYear)){
      setYesterday(daysInMonth(currentMonth+1, currentYear))
    }else if(todaysDay === 1){
      setYesterday(1)
    }else{
      setYesterday(yesterday+1)
    }
    tomorrow !== daysInCurrentMonth ? setTomorrow(tomorrow+1) : setTomorrow(1)
  }

  let dayEvents = [
    {time:'All Day', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'11: 00', avaliable: 0, double: false, title: 'AVAILABLE'},
    {time:'12: 00', avaliable: 2, double: false, title: 'Not Available'},
    {time:'13: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'14: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'15: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'16: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'17: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'18: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'}
  ]

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={styles.container}>
        <View style={{width: '88%', marginTop: windowHeight*0.03}}>
          <BlueButton title='Home' link="Chat"/>        
        </View>
        <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', width: "100%", marginTop: windowHeight*0.025, paddingHorizontal: '20%'}}>
          <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24}}>{months[currentMonth]} {currentYear}</Text>
        </View>     
        <View style={[styles.calendar, {marginTop: windowHeight*0.016, marginBottom: windowHeight*0.002}]}>
          <TouchableOpacity style={styles.icon} onPress={goBack}>
            <Left style={{width: 40, height: 60}}/>
          </TouchableOpacity>
          {[yesterday, todaysDay, tomorrow].map((item, index) => {
            return(
              <View key={index} style={[styles.dateStyle, index === 1 ? {backgroundColor: '#ffffff', borderColor: '#112b66', padding: '4%'} : {backgroundColor: '#fafafa', borderColor: '#8390ae', marginLeft: '0%'}]}>
                <Text style={[index === 1 ? {paddingVertical: windowHeight*0.01, width: 32, textAlign: 'center', fontSize: 24} : {paddingVertical: windowHeight*0.007, width: 22, textAlign: 'center', fontSize: 16}]}>{item}</Text>
              </View>
            )
          })}
          <TouchableOpacity style={styles.icon} onPress={goForward}>
            <Right style={{width: 40, height: 60}}/>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', marginTop: '2%', maxHeight: windowHeight*0.57}}>            
          <ScrollView style={{width: '100%'}}>
            <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
              {dayEvents.map((item, index) => {
                return(        
                  <View key={index} style={[styles.dayEvents, index===0 ? {marginBottom: '4%'} : null ]}>
                    <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24}}>{item.time}</Text>
                    {item.double? 
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '62%'}}>
                        <View style={[styles.Event, item.avaliable === 0 ? {backgroundColor: '#03CC00'} : item.avaliable === 1 ? {backgroundColor: '#858585'} : {backgroundColor: '#E64646'}]}>
                          <Text style={[item.avaliable === 0 ? {color: 'white', fontSize: 16} : item.avaliable === 1 ? {color: 'white', fontSize: 11} : {color: 'black', fontSize: 16}, {fontFamily: 'Poppins_700Bold'}]}>{item.title}</Text>
                        </View>
                        <View style={[styles.Event, item.secondAvlbl === 0 ? {backgroundColor: '#03CC00'} : item.secondAvlbl === 1 ? {backgroundColor: '#858585'} : {backgroundColor: '#E64646'}]}>
                          <Text style={[item.secondAvlbl === 0 ? {color: 'white', fontSize: 16} : item.secondAvlbl === 1 ? {color: 'white', fontSize: 11} : {color: 'black', fontSize: 16}, {fontFamily: 'Poppins_700Bold'}]}>{item.secondTitle}</Text>
                        </View>                                
                      </View>
                    :
                      <View style={[styles.Event, {width: '62%'}, item.avaliable === 0 ? {backgroundColor: '#03CC00'} : item.avaliable === 1 ? {backgroundColor: '#858585'} : {backgroundColor: '#E64646'}]}>
                        <Text style={[item.avaliable === 0 ? {color: 'white', fontSize: 16} : item.avaliable === 1 ? {color: 'white', fontSize: 11} : {color: 'black', fontSize: 16}, {fontFamily: 'Poppins_700Bold'}]}>{item.title}</Text>
                      </View>
                    }
                  </View>
                )})
              }          
            </View>
         </ScrollView>
        </View>
        <View style={styles.buttonBottom}>
          <BlueButton title='Save' link="Welcome"/>        
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
  calendar: {
    display: 'flex', 
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: "100%", 
    paddingHorizontal: '22%'
  },
  icon: {
    padding: '6%'
  },
  dateStyle: {
    display: 'flex',
    fontFamily: 'Poppins_700Bold',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#fafafa', 
    borderColor: '#8390ae'
  },      
  dayEvents: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '86%',
    marginTop: '3%'
  },
  Event: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: '3.2%',
    width: '49.8%'
  },
  buttonBottom: {
    position: 'absolute', 
    width: '90%', 
    bottom: '3%'
  }
})