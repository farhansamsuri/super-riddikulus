import React, {useRef, useEffect, useState} from "react";
import { View, TouchableOpacity, ImageBackground, Text, Animated, TextInput, Alert } from 'react-native';
import styles from '../styles/Stylesheet';
import welcome from '../../assets/welcomeImage.png'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import mongoAPI from "../../config/mongoAPI";

const Registration = () => {

    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
    });


    const [username, setUsername] = useState(null);
/*     const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null); */
    const [email, setEmail] = useState(null);
    const [hiddenEmail, setHiddenEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [details, setDetails] = useState({});
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const navigation = useNavigation();

    const registerOnPress = async() => {
        const emailCheck = /\S+@\S+\.\S+/;

        if (!username) {
            Alert.alert('Please input a name');
            return;
        } else if(!emailCheck.test(email)) {
            Alert.alert('Invalid email address');
            return; 
        } else if (!password || password.search(/[A-Z]/) < 0 || password.search(/[0-9]/) < 0 || password.search(/[a-z]/) < 0 || password.length < 8) {
            Alert.alert('Password needs to minimally have : lowercase and uppercase letter, a number and longer than 7 characters')
            return;
        } else if (passwordRepeat !== password) {
            Alert.alert('Passwords do not match!');
            return;
        }

        try {

            const res = await mongoAPI.post('/user', details);
            if(res) {
                Alert.alert(`New student ${username}, welcome!`
                )
                navigation.navigate('Login');
                console.log(`details: email - ${hiddenEmail}, name - ${username}`)
            }
        } catch (error) {
            alert(JSON.stringify(error.response.data.message))
        }
    }

    useEffect(() => {
        const prepare = () => {
          email ? setHiddenEmail(email.toLowerCase()) : null;
            setDetails(() => ({
                username: username,
                email: hiddenEmail,
                password: password,
            }));
        };
        prepare();
    }, [username, password]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <ImageBackground
                source={welcome}
                style={styles.image}>   
                <View style = {styles.inputBox}>
                        <TextInput
                            placeholder = 'Username'
                            value = {username}
                            onChangeText = {setUsername}></TextInput>
                        <TextInput 
                            placeholder = 'Email'
                            value = {email}
                            onChangeText = {setEmail}></TextInput>
                        <TextInput 
                            placeholder = 'Password'
                            value = {password}
                            secureTextEntry
                            onChangeText = {setPassword}></TextInput>
                        <TextInput 
                            placeholder = 'Repeat password'
                            value = {passwordRepeat}
                            secureTextEntry
                            onChangeText = {setPasswordRepeat}></TextInput>
                        <TouchableOpacity
                            onPress = {registerOnPress}>
                                <Text>Register</Text>
                            </TouchableOpacity>
                            <Text>Have an account? Sign in</Text>
                            </View>
            </ImageBackground>
        </View>
    );
}

export default Registration; 