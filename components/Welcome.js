import React from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';

export default function Welcome({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });   

  let buttonsData = [
    {value: 'Chat', link: 'ChatsList'}, 
    {value: 'Check / Fill Calendar', link: null }, 
    {value: 'DataBase', link: null}, 
    {value: 'Add Staff / Mrg', link: null}
  ]
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(
    <View style={styles.wel}>
      <View style={styles.welContainer}>
        <Text style={styles.welLogo}>WELCOME</Text>
        <FlatList style={{ width: '84%'}} data={buttonsData} renderItem={({item, index}) => (
          <TouchableOpacity style={styles.button} key={index} onPress={() => navigation.navigate(item.link)}>
            <Text style={styles.buttonText}>{item.value}</Text>
          </TouchableOpacity>  
        )} />
      </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  wel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex:1,
    fontFamily: 'Poppins_400Regular'
  },
  welContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  welLogo: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: '7%'
  },
  button: {
    backgroundColor: '#112B66',
    marginTop: '5%',
    padding: '3.2%',
    width: '100%',
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '700',
    fontSize: 20,
    color: 'white'
  }  
})