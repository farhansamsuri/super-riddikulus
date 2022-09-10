import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import { Alert } from 'react-native';
import mongoAPI from '../../config/mongoAPI';

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [test, setTest] = useState ('Test Value')
    const [isLoading, setIsLoading] = useState (false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = async(details) => {
        setIsLoading(true);
       try{ 
        const res = await mongoAPI.post('/user/login', 
            details);
            if(res) {
                let userInfo = res.data;
               console.log('res.data', res.data);
               console.log('user token:', userInfo.data);
               console.log('user info:', userInfo);          
               setUserInfo(userInfo);
               setUserToken(userInfo.data);
            }
        } catch (error) {
            console.log(`login error ${error}`);
        }
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }


    const isLoggedIn = async() => {
        //userToken separate from previous userTokens
        try{
        setIsLoading(true);
        let userInfo = await AsyncStorage.getItem('userInfo');
        let userToken = await AsyncStorage.getItem('userToken');
        userInfo = JSON.parse(userInfo);


        if ( userInfo ) {
            setUserToken(userToken);
            setUserInfo(userInfo);
        }
        
        setIsLoading(false);
    } catch(e) {
        console.log(`isLogged in error ${e}`);
        Alert.alert(`${error.response.data.message}`)
    }
}


    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value= {{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
        
    )
}
