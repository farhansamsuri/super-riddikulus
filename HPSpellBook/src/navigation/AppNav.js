import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import { AuthContext, AuthProvider } from '../contexts/AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const AppNav = () => {

    const {isLoading, userToken, userInfo} = useContext(AuthContext);
    console.log("userToken", userToken)
    console.log("userInfo", userInfo)
    if ( isLoading ) {
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        );
    }

    return (
        <>
            {userToken !== null ? <AppStack /> : <AuthStack />}
        </>
    )
}

export default AppNav