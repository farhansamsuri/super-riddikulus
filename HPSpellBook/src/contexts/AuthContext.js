import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import mongoAPI, { localAPI } from '../../config/mongoAPI';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = async (details) => {
        setIsLoading(true);
        console.log(details)
/*         if (!details.email) {
            Alert.alert('Please input email!');
            setIsLoading(false);
            return;
        }else if (!details.password) {
            Alert.alert('Please input password!');
            setIsLoading(false);
            return;
        } */

        //lags/hangs if above condition is used

        try {
            const res = await mongoAPI.post('/user/login',
                details);
            if (res) {
                let userInfo = res.data;
               console.log('user info:', userInfo);          
               setUserInfo(userInfo);
               setUserToken(userInfo.data.token);
                if(userInfo.status == 400) {
                    Alert.alert("Login Failed", userInfo.message)
                    setIsLoading(false);
                    return;
                }
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
        try {
            const res = await mongoAPI.put('/spells', /* userInfo.data.id */{ user: userInfo.data.id, body: spell });
            if (res) {
                console.log('addSpell data:', res.data)
            }
        } catch (error) {
            console.log(`save error: ${error}`);
        }
        setIsLoading(false);
    }

    const deleteSpell = async (spell) => {
        setIsLoading(true);
        try {
            const res = await mongoAPI.delete('/spells', {
                data: { user: userInfo.data.id, body: spell }
            });
            if (res) {
                console.log('deleteSpell data:', res.data)
            }
        } catch (error) {
            console.error(`delete error: ${error}`)
        }
        setIsLoading(false);
    }

    const addElixir = async (elixir) => {
        setIsLoading(true);
        try {
            const res = await mongoAPI.put('/elixirs', /* userInfo.data.id */{ user: userInfo.data.id, body: elixir });
            if (res) {
                console.log('addElixir data:', res.data)
            }
        } catch (error) {
            console.log(`save error: ${error}`);
        }
        setIsLoading(false);
    }

    const deleteElixir = async (elixir) => {
        setIsLoading(true);
        try {
            const res = await mongoAPI.delete('/elixirs', {
                data: { user: userInfo.data.id, body: elixir }
            });
            if (res) {
                console.log('deleteElixir data:', res.data)
            }
        } catch (error) {
            console.error(`delete error: ${error}`)
        }
        setIsLoading(false);
    }

    const editPassword = async (oldPass, newPass, confirmPass) => {
        setIsLoading(true);
        try {
            const res = await mongoAPI.put('/user/password', {
                 user: userInfo.data.id, oldPass: oldPass, newPass: newPass, confirmPass: confirmPass }
            );
            if (res) {
                console.log('editPass data:', res.data);
                Alert.alert('Password updated!');
                setIsLoading(false);
                return;
            }
        } catch (error) {
            console.error(`delete error: ${error}`)
        }
        setIsLoading(false);
    }

    const editAccount = async (details) => {
        setIsLoading(true);
        try {
            const res = await mongoAPI.put('/user/profile', {
                 user: userInfo.data.id, body: details }
            );
            if (res) {
                console.log('editProfile data:', res.data);
                setUserInfo({...userInfo, data:details})
                Alert.alert('Profile updated!');
            }
            console.log('userInfo update:', userInfo)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        } catch (error) {
            console.error(`delete error: ${error}`)
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


    const isLoggedIn = async () => {
        //userToken separate from previous userTokens
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);


            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }

            setIsLoading(false);
        } catch (e) {
            console.log(`isLogged in error ${e}`);
            Alert.alert(`${error.response.data.message}`)
        }
    }


    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, addSpell, deleteSpell, addElixir, deleteElixir, editPassword, editAccount, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>

    )
}