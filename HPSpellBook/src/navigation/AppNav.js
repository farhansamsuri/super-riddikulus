import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack'; */
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const AppNav = () => {

    const {isLoading, userToken} = useContext(AuthContext);
    console.log("userToken", userToken)
    if ( isLoading ) {
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        );
    }

    return (
        <NavigationContainer>
            
            {userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default AppNav