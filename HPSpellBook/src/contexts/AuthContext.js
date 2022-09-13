import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import { Alert } from 'react-native';
import mongoAPI from '../../config/mongoAPI';
import localAPI from '../../config/localAPI';

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState (false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = async(details) => {
        setIsLoading(true);
/*         if (!details.email) {
            Alert.alert('Please input a name');
            return;
        }else if (!details.password) {
            Alert.alert('Please input password!');
            return;
        } */

//lags/hangs if above condition is used

       try{ 
        const res = await mongoAPI.post('/user/login', 
            details);
            if(res) {
                let userInfo = res.data;
               console.log('res.data', res.data);
               console.log('user info.data:', userInfo.data);
               console.log('user info:', userInfo);          
               setUserInfo(userInfo);
               setUserToken(userInfo.data.token);

               AsyncStorage.setItem('userToken', userInfo.data.token)
               AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            }
        } catch (error) {
            console.log(`login error ${error}`);
        }
        setIsLoading(false);
    }

    const addSpell = async (spell) => {
        setIsLoading(true);
        try{
        const res = await localAPI.put('/spells', /* userInfo.data.id */{user:userInfo.data.id, body:spell});
        if (res){
            console.log('addSpell data:', res.data)
            console.log('userInfo', userInfo)
        }
        }  catch (error) {
            console.log(`save error: ${error}`);
    }
    setIsLoading(false);
}

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken')
        AsyncStorage.removeItem('userInfo');
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
        <AuthContext.Provider value= {{login, logout, isLoading, userToken, userInfo, addSpell}}>
            {children}
        </AuthContext.Provider>
        
    )
}