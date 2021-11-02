import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import DataTable from "../components/DataTable";
import BlueButton from "../components/BlueButton";

export default function DataBase({ route }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  });  

  let [maximumArray, setMaximunArray] = useState(0)

  for(let x=0; x<route.params.base.length; x++){
    if(route.params.base[x].length > maximumArray){
      setMaximunArray(route.params.base[x].length)
    }
  }

  let [eraseValues, setEraseValues] = useState([])

  let [connectArrays, setConnectArrays] = useState(true)

  if(connectArrays){
      for(let x=1; x<maximumArray; x++){
        eraseValues.push({selected: false, value: x})
      }
      if(maximumArray > 0){
        setConnectArrays(false)
      }
  }

  console.log(eraseValues)
  const eraseSelected = (index) => {
    let newArr = [...eraseValues]; 
    eraseValues[index].selected = !eraseValues[index].selected;
    setEraseValues(newArr);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={[styles.container]}>   
        <Text style={[{marginTop:'14%'}, {fontFamily: 'Poppins_700Bold', fontSize: 20}]}>{route.params.title}</Text>
        <View style={{width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', height: '41%'}}>
            <View style={{position: 'relative', top: '2%', left: '8%', width: '4%', justifyContent: 'space-between', height: '66%'}}>
              {eraseValues.map((item, index) => {
                return(
                  <TouchableOpacity key={index} style={{position: 'relative', top: '14%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1, borderWidth: 1, borderColor: 'black', borderRadius: 4, width: '100%', height: '19%'}} onPress={() => eraseSelected(index)}>
                    {item.selected ? 
                      <View style={styles.selected}/>  
                      : null
                    }
                  </TouchableOpacity> 
                )
              })}
            </View>
            <ScrollView horizontal={true} style={{position: 'relative', left: '4%', marginTop: 0}}>
              <View style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', width: "120%", paddingLeft: 0, paddingRight: 80}}>
                <DataTable edit={false} DataTableBase={route.params.base} />
              </View>
            </ScrollView>
          </View>

        </View>  
        <View style={{position: 'absolute', bottom: '2%', width: '86%'}}>
          <BlueButton title="Erase"/>
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
  selected: {
    backgroundColor: '#112B66',
    width: '88%',
    height: '90%',
    borderRadius: 4,
    // paddingTop: '20%'
  }    
})