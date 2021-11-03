import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../components/Login";
import Welcome from "../components/Welcome";
import ChatsList from "../components/ChatsList";
import Chat from "../components/Chat";
import Broadcasts from "../components/Broadcasts";
import DataBase from "../components/DataBase";
import EditDataBase from "../components/EditDataBase";
import EraseDataBase from "../components/EraseDataBase";
import DateEvents from "../components/DateEvents";
import Calendar from "../components/Calendar";
import Registration from "../components/Registration";
import RegistrationStuff from "../components/RegistrationStuff";
import AddBooking from "../components/AddBooking";
import AllDateEvents from "../components/AllDateEvents";
import Avaliable from "../components/Avaliable";

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