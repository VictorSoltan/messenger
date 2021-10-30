import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';

import ArrowLeft from '../assets/arrow-left.svg'
import SelectTrue from '../assets/selectTrue.svg'

export default function Broadcasts({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });   

  let [broadcastsPreview, setBroadcastsPreview] = useState([
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
            <View style={styles.contact}>
              <Image style={styles.arrow} source={ArrowLeft}/> 
              {/* <ArrowLeft style={{width: 14, height: 10, marginRight: '12%'}}/>  */}            
            </View>     
            <TouchableOpacity style={styles.button} >
              <Text style={[styles.buttonText, {color: 'white'}]}>Save Broadcast</Text>
            </TouchableOpacity>    
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '88%', marginTop: '2%'}}>     
            <TouchableOpacity style={[styles.twoButtons, styles.stuff]} >
              <Text style={[styles.buttonText, {color: '#222222'}]}>STAFF</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={[styles.twoButtons, styles.clients]} >
              <Text style={[styles.buttonText, {color: '#222222'}]}>CLIENTS</Text>
            </TouchableOpacity>                          
          </View>     
        </View>     
        <View style={styles.container}>    
          <FlatList style={{width: '100%'}} data={broadcastsPreview} renderItem={({item, index}) => (
            <View style={{alignItems: 'center'}}>
              <View key={index} style={[styles.broadcast, !item.selected ? {backgroundColor: '#E8F4FF'} : ((index+1)%3===0 ? {backgroundColor: '#E9FFE8'} : index%3===0 ? {backgroundColor: '#E8F4FF'} : {backgroundColor: '#FFFFE8'})]}>
                {!item.selected ? 
                  <TouchableOpacity style={{position: 'absolute', left: '4%'}} onPress={() => updateFieldChanged(index)}>
                    <View style={styles.emptySelect} />
                  </TouchableOpacity>
                :
                  <TouchableOpacity style={{position: 'absolute', left: '4%'}} onPress={() => updateFieldChanged(index)}>
                    <Image style={styles.select} source={SelectTrue}/> 
                  </TouchableOpacity>
                }
                {/* <ArrowLeft style={{width: 14, height: 10, marginRight: '12%'}}/>  */}  
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '8%'}}>
                  <Text style={{textAlign: 'center', fontFamily: 'Poppins_500Medium', fontSize: 23}}>{item.title}</Text>
                  <Text style={{marginLeft: '4%', fontFamily: 'Poppins_500Medium', fontSize: 17, color: '#8A8A8A'}}>{item.city}</Text>
                </View>         
              </View>
              <View style={styles.chatLine}/>
            </View>

          )} />
        </View>         
        <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={() => navigation.navigate('Welcome')}>
          <Text style={[styles.buttonText, {color: 'white'}]}>Home</Text>
        </TouchableOpacity>              
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
    marginTop: '14%',
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
    alignItems: 'center'
  },
  stuff: {
    backgroundColor: '#FFFFE8'
  },
  clients: {
    backgroundColor: '#E8F4FF'
  }, 
  container: {
    position: 'absolute',
    top: '26%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '72%',
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
  homeButton: {
    position: 'absolute',
    bottom: '2%',
  },
  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '500',
    fontSize: 20,
  }
})
