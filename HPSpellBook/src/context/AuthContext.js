import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';


export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [test, setTest] = useState ('Test Value')
    const [isLoading, setIsLoading] = useState (false);
    const [userToken, setUserToken] = useState(null);

    const login = () => {
        setIsLoading(true);
        setUserToken('ThisIsHard');
        AsyncStorage.setItem('userToken', 'ThisIsHard');
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
        let userToken = await AsyncStorage.getItem('userToken');
        setUserToken(userToken);
        setIsLoading(false);
    } catch(e) {
        console.log(`isLogged in error ${e}`);
    }
}


    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value= {{login, logout, isLoading, userToken, test}}>
            {children}
        </AuthContext.Provider>
        
    )
}
