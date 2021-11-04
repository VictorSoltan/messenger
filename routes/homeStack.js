import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../screens/Welcome";

import Login from "../screens/Login/Login";
import Registration from "../screens/Login/Registration";
import RegistrationStuff from "../screens/Login/RegistrationStuff";

import ChatsList from "../screens/Chat/ChatsList";
import Chat from "../screens/Chat/Chat";
import Broadcasts from "../screens/Chat/Broadcasts";

import DataBase from "../screens/DataBase/DataBase";
import EditDataBase from "../screens/DataBase/EditDataBase";
import EraseDataBase from "../screens/DataBase/EraseDataBase";
import AddBooking from "../screens/DataBase/AddBooking";

import DateEvents from "../screens/Date/DateEvents";
import Calendar from "../screens/Date/Calendar";
import AllDateEvents from "../screens/Date/AllDateEvents";
import Avaliable from "../screens/Date/Avaliable";

const Stack = createStackNavigator()

export default function Navigate(){
 return <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{title: 'Login'}}
            />
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{title: 'Welcome'}}
            /> 
            <Stack.Screen 
                name="ChatsList"
                component={ChatsList}
                options={{title: 'ChatsList'}}
            />         
            <Stack.Screen 
                name="Chat"
                component={Chat}
                options={{title: 'Chat'}}
            />                   
            <Stack.Screen 
                name="Broadcasts"
                component={Broadcasts}
                options={{title: 'Broadcasts'}}
            />                         
            <Stack.Screen 
                name="DataBase"
                component={DataBase}
                options={{title: 'DataBase'}}
            />    
            <Stack.Screen 
                name="EditDataBase"
                component={EditDataBase}
                options={{title: 'EditDataBase'}}
            />                                                  
            <Stack.Screen 
                name="EraseDataBase"
                component={EraseDataBase}
                options={{title: 'EraseDataBase'}}
            />    
            <Stack.Screen 
                name="DateEvents"
                component={DateEvents}
                options={{title: 'DateEvents'}}
            />      
             <Stack.Screen 
                name="Calendar"
                component={Calendar}
                options={{title: 'Calendar'}}
            /> 
            <Stack.Screen 
                name="Registration"
                component={Registration}
                options={{title: 'Registration'}}
            />       
             <Stack.Screen 
                name="RegistrationStuff"
                component={RegistrationStuff}
                options={{title: 'RegistrationStuff'}}
            />                  
            <Stack.Screen 
                name="AddBooking"
                component={AddBooking}
                options={{title: 'AddBooking'}}
            />       
            <Stack.Screen 
                name="AllDateEvents"
                component={AllDateEvents}
                options={{title: 'AllDateEvents'}}
            />                               
             <Stack.Screen 
                name="Avaliable"
                component={Avaliable}
                options={{title: 'Avaliable'}}
            />                                            
        </Stack.Navigator>
    </NavigationContainer>
}