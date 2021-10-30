import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import DataTable from "../components/DataTable";

import Pencil from '../assets/pencil.svg'

export default function DataBase({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  });   


    let DataTableBase = [
      ['Name', 'Trololo228', '', '', ''],
      ['Password', 'Aezakeme123', '', '', ''],
      ['Telephone', '+7 777 777 777', '', '', ''],
      ['Email', 'SuperFara2@mail.ru', '', '', ''],
    ]
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={[styles.broadcasts]}>    
      <Text style={{position:'relative', top: '7%', fontFamily: 'Poppins_700Bold', fontSize: 20}}>Client data base</Text>
        <View style={{position: 'absolute', top: '11%', width: '100%'}}>
          <View style={{width: "130%", overflow: 'hidden'}}>
            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
              <DataTable DataTableBase={DataTableBase} />
            </View>          
          </View>
        </View>       
        <View style={{position:'relative', top: '52%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '88%'}}> 
          <TouchableOpacity style={styles.button} >
            <Text style={[styles.buttonText, {color: 'white'}]}>Download</Text>
          </TouchableOpacity>    
          <View style={styles.contact}>
            {/* <Image style={styles.icon} source={Pencil}/>  */}
            <Pencil style={styles.icon}/>             
          </View>              
        </View>   
        <Text style={{position:'relative', top: '26%', fontFamily: 'Poppins_700Bold', fontSize: 20}}>Staff data base</Text>
        <View style={{position: 'absolute', top: '41%', width: '100%', overflow:'hidden'}}>
          <View style={{width: "130%"}}>
            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
              <DataTable DataTableBase={DataTableBase} />
            </View>          
          </View>
        </View>       
        <View style={{position:'relative', top: '88%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '88%'}}> 
          <TouchableOpacity style={styles.button} >
            <Text style={[styles.buttonText, {color: 'white'}]}>Download</Text>
          </TouchableOpacity>    
          <View style={styles.contact}>
            {/* <Image style={styles.icon} source={Pencil}/>  */}
            <Pencil style={styles.icon}/>             
          </View>              
        </View>      
        <Text style={{position:'relative', top: '46%', fontFamily: 'Poppins_700Bold', fontSize: 20}}>Booking data base</Text>
        <View style={{position: 'absolute', top: '72%', width: '100%', overflow:'hidden'}}>
          <View style={{width: "130%"}}>
            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
              <DataTable DataTableBase={DataTableBase} />
            </View>          
          </View>
        </View>       
        <View style={{position:'relative', top: '127%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '88%'}}> 
          <TouchableOpacity style={styles.button} >
            <Text style={[styles.buttonText, {color: 'white'}]}>Download</Text>
          </TouchableOpacity>    
          <View style={styles.contact}>
            {/* <Image style={styles.icon} source={Pencil}/>  */}
            <Pencil style={styles.icon}/>             
          </View>              
        </View>                    
      </View>

    )
  }
}

const styles = StyleSheet.create({   
  broadcasts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  header: {
  },
  chatHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '3%',
    paddingBottom: '6%'
  },
  contact: {
    backgroundColor: '#112B66',
    borderRadius: 190,
    padding: '4.4%',
  },
  icon: {
    width: 14, 
    height: 14,
  },
  button: {
    backgroundColor: '#112B66',
    padding: '2%',
    width: '84%',
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '500',
    fontSize: 20,
  }    
})