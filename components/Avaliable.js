import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import BlueButton from "../components/BlueButton";

export default function Avaliable({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  });  

  let [member, setMember] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={[styles.container]}>  
        <View style={{flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'space-between', paddingHorizontal: '5%'}}>
          <Text style={{fontSize: 16, fontFamily: 'Poppins_500Medium'}}>AVAILABLE TODAY</Text>
          <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1, borderWidth: 1, borderColor: 'black', borderRadius: 4, width: 26, height: 26, marginLeft: '4%'}} onPress={() => setMember(!member)}>
            {member ? 
              <View style={styles.selected}/>  
              : null
            }
          </TouchableOpacity>              
        </View>    
        {[...Array(6).keys()].map((index) => {
          return(
            <View key={index} style={[index===0 ? {marginTop: '6%'} : null, {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#FFFFE8', padding: '5%'}]}>
              <Text style={{marginLeft: '12%', fontFamily: 'Poppins_500Medium', fontSize: 23}}>ShaMsiDDin</Text>
              <Text style={{marginLeft: '4%', fontFamily: 'Poppins_500Medium', fontSize: 17, color: '#8A8A8A'}}>Kiev</Text>
            </View>
          )  
        })}
        <View style={{position: 'absolute', bottom: '4%', width: '88%'}}>
          <BlueButton title='Home'/>        
        </View>        
      </View>
    )
  }
}

const styles = StyleSheet.create({   
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    marginTop: '14%',
  },
  selected: {
    backgroundColor: '#112B66',
    width: '90%',
    height: '90%',
    borderRadius: 4
  }    
})