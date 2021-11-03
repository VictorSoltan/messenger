import React from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
import BlueButton from "../components/BlueButton";

function Welcome(props, { navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });   

  let managerData = [
    {value: 'Chat', link: 'ChatsList'}, 
    {value: 'Check / Fill Calendar', link: 'Avaliable' }, 
    {value: 'DataBase', link: 'DataBase'}, 
    {value: 'Add Staff / Mrg', link: 'RegistrationStuff'}
  ]
  let clientData = [
    {value: 'Chat with a manager', link: 'Chat'}, 
    {value: 'Staff availiability calendar', link: 'Avaliable' }
  ]
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(
    <View style={styles.wel}>
      <View style={styles.welContainer}>
        <Text style={styles.welLogo}>WELCOME</Text>
        {(props.admin ? managerData : clientData).map((item, index) => {
          return(
            <View key={index} style={{marginTop: '5%', width: '100%'}}>
              <BlueButton title={item.value} link={item.link}/>
            </View>
          )
        })} 
      </View>
    </View>
  )}
}

function mapStateToProps(state){
  return {
    admin: state.admin
  }
}

export default connect(mapStateToProps)(Welcome);

const styles = StyleSheet.create({
  wel: {
    display: 'flex',
    flex:1,
    paddingHorizontal: '8%',
    flexDirection: 'column',
    justifyContent: 'center',
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