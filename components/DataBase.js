import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import Pencil from '../assets/pencil.svg'

import DataTable from "../components/DataTable";
import BlueButton from "../components/BlueButton";

export default function DataBase() {
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

  let DataTableBase = [
    {title: 'Client data base', show: true, base: [
      ['Name', 'Trololo228', '', '', ''],
      ['Password', 'Aezakeme123', '', '', ''],
      ['Telephone', '+7 777 777 777', '', '', ''],
      ['Email', 'SuperFara2@mail.ru', '', '', ''],
    ]},
    {title: 'Staff data base', show: true, base: [
      ['Name', 'Trololo228', '', '', ''],
      ['Password', 'Aezakeme123', '', '', ''],
      ['Telephone', '+7 777 777 777', '', '', ''],
      ['Email', 'SuperFara2@mail.ru', '', '', ''],
    ]},
    {title: 'Booking data base', show: true, base: [
      ['Name', 'Trololo228', '', '', ''],
      ['Password', 'Aezakeme123', '', '', ''],
      ['Telephone', '+7 777 777 777', '', '', ''],
      ['Email', 'SuperFara2@mail.ru', '', '', ''],
    ]},        
  ]

  let [openEditior, setOpenEditor] = useState(false) 
  let editButton = [
    {title: 'ADD', link: 'AddBooking'}, 
    {title: 'EDIT', link: 'EditDataBase'}, 
    {title: 'ERASE', link: 'EraseDataBase'}, 
    {title: 'BLOCK', link: ''}, 
    {title: 'SAVE', link: 'DataBase'}
  ]
  let [editTitle, setEditTitle] = useState('')
  let [dataIndex, setDataIndex] = useState(null)

  function toggleEditor(e, index){
    if(!openEditior){
      setEditTitle(e)
      setOpenEditor(!openEditior)
      setDataIndex(index)
    }else{
      setEditTitle('')
      setOpenEditor(!openEditior)
      setDataIndex(null)
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <ScrollView>
        <TouchableWithoutFeedback onPress={openEditior ? () => toggleEditor() : null} accessible={false}>
          <View style={[styles.container]}>    
            {DataTableBase.map((item, index) => {
              return(
                <View key={index} style={{width: '100%', alignItems: 'center'}}>
                  <Text style={[index===0 ? {marginTop: windowHeight*0.062} : {marginTop: windowHeight*0.01}, {fontFamily: 'Poppins_700Bold', fontSize: 20}]}>{item.title}</Text>
                  <View style={{width: '100%'}}>
                    <ScrollView horizontal={true} style={{width: "100%", marginTop: 0}}>
                      <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', width: "auto", paddingLeft: 40}}>
                        <DataTable edit={false} DataTableBase={item.base} />
                      </View>          
                    </ScrollView>
                  </View>       
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: windowHeight*0.0014, width: '88%'}}> 
                    <TouchableOpacity style={[styles.button, {padding: windowHeight*0.01}]} >
                      <Text style={[styles.buttonText, {color: 'white'}]}>Download</Text>
                    </TouchableOpacity>    
                    <TouchableOpacity onPress={() => toggleEditor(item.title, index)}>
                      <View style={[styles.contact, {padding: windowHeight*0.02}]}>
                        <Pencil style={styles.icon}/>             
                      </View>              
                    </TouchableOpacity>
                  </View>   
                </View>
            )})}           
            {openEditior?
              <View style={{position: 'absolute', bottom: 0, alignItems: 'center', width: '100%', paddingHorizontal: '5%', paddingBottom: '4%', backgroundColor: '#F5F5F5'}}>
                <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 20, marginTop: '7%'}} >Edit {editTitle}</Text>
                {editButton.map((item, index) => {
                  return(
                    <View key={index} style={{marginTop: '5%', width: '100%'}}>
                      <BlueButton title={item.title} data={DataTableBase[dataIndex]} link={item.link}/>
                    </View>
                  )
                })}
              </View>   
            : null} 
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({   
  container: {
    display: 'flex',
    flex: 1,
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#112B66',
    borderRadius: 190,
    padding: '4%',
    paddingVertical: '30%'
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