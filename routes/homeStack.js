import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../components/Login";
import Welcome from "../components/Welcome";
import ChatsList from "../components/ChatsList";
import Chat from "../components/Chat";
import Broadcasts from "../components/Broadcasts";
import DataBase from "../components/DataBase";


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
            {/* <Stack.Screen 
                name="Broadcasts"
                component={Broadcasts}
                options={{title: 'Broadcasts'}}
            />         */}
            <Stack.Screen 
                name="DataBase"
                component={DataBase}
                options={{title: 'DataBase'}}
            />                                
        </Stack.Navigator>
    </NavigationContainer>
}