import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';

import ArrowLeft from '../assets/arrow-left.svg'
import SelectTrue from '../assets/selectTrue.svg'
import BlueButton from "../components/BlueButton";

export default function Broadcasts({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });   

  let [employer, setEmployer] = useState(true)

  let [broadcastsPreview, setBroadcastsPreview] = useState([
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},        
    {selected: false, title: '***ShaMsiDDin***', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'},
    {selected: false, title: 'ShaMsiDDin', city: 'Kiev'}
  ])
  
  const updateFieldChanged = (index) => {
    let newArr = [...broadcastsPreview]; 
    newArr[index].selected = !broadcastsPreview[index].selected;
    setBroadcastsPreview(newArr);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={[styles.broadcasts]}>  
        <View style={styles.chatHeader}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
            <TouchableOpacity style={styles.contact} onPress={() => navigation.goBack()}>
              <ArrowLeft style={{width: 14, height: 10}}/>             
            </TouchableOpacity>     
            <TouchableOpacity style={styles.button} >
              <Text style={[styles.buttonText, {color: 'white'}]}>Save Broadcast</Text>
            </TouchableOpacity>    
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '88%', marginTop: '4%'}}>     
            <TouchableOpacity style={[styles.twoButtons, employer ? {backgroundColor: '#FFFFE8'} : null]} onPress={() => setEmployer(true)}>
              <Text style={[styles.buttonText, {color: '#222222'}]}>STAFF</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={[styles.twoButtons, !employer ? {backgroundColor: '#E8F4FF'} : null]} onPress={() => setEmployer(false)}>
              <Text style={[styles.buttonText, {color: '#222222'}]}>CLIENTS</Text>
            </TouchableOpacity>                          
          </View>     
        </View>     
        <View style={styles.container}>    
        <ScrollView style={{width: '100%'}}>
          {broadcastsPreview.map((item, index) => {
            return(
            <View style={{alignItems: 'center'}}>
              <View key={index} style={[styles.broadcast, !item.selected ? {backgroundColor: '#E8F4FF'} : ((index+1)%3===0 ? {backgroundColor: '#E9FFE8'} : index%3===0 ? {backgroundColor: '#E8F4FF'} : {backgroundColor: '#FFFFE8'})]}>
                {!item.selected ? 
                  <TouchableOpacity style={{position: 'absolute', left: '4%'}} onPress={() => updateFieldChanged(index)}>
                    <View style={styles.emptySelect} />
                  </TouchableOpacity>
                :
                  <TouchableOpacity style={{position: 'absolute', left: '4%'}} onPress={() => updateFieldChanged(index)}>
                    <SelectTrue style={styles.select} source={SelectTrue}/>   
                  </TouchableOpacity>
                }
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '8%'}}>
                  <Text style={{textAlign: 'center', fontFamily: 'Poppins_500Medium', fontSize: 23}}>{item.title}</Text>
                  <Text style={{marginLeft: '4%', fontFamily: 'Poppins_500Medium', fontSize: 17, color: '#8A8A8A'}}>{item.city}</Text>
                </View>         
              </View>
              <View style={styles.chatLine}/>
            </View>
          )})}
        </ScrollView>
        </View>         
        <View style={{position: 'absolute', bottom: '2%', width: '84%'}}>
          <BlueButton title='Save'/>        
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
  chatHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '8%',
    padding: '3%',
  },
  contact: {
    backgroundColor: 'white',
    borderRadius: 190,
    padding: '5%',
  },
  arrow: {
    width: 14, 
    height: 14,
  },
  twoButtons: {
    marginTop: 0,
    padding: '3%',
    width: '45%',
    borderWidth: 1,
    borderColor: '#222222',
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#979797'
  },
  stuff: {
    backgroundColor: '#FFFFE8'
  },
  clients: {
    backgroundColor: '#E8F4FF'
  }, 
  container: {
    marginTop: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: '62%',
    overflow: 'hidden' 
  },   
  broadcast: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '5%'
  },
  emptySelect: {
    borderRadius: 190,
    backgroundColor: 'white',
    width: 18,
    height: 18
  },
  select: {
    width: 18, 
    height: 18,
  },
  chatLine: {
    position: 'absolute',
    bottom: 1,
    height: 1,
    width: '80%',
    backgroundColor: '#D9D9D9'
  },  
  button: {
    backgroundColor: '#112B66',
    padding: '3.2%',
    width: '84%',
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
  }
})
