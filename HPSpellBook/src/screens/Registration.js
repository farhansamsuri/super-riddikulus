import React, {useRef, useEffect, useState} from "react";
import { View, TouchableOpacity, ImageBackground, Text, Animated, TextInput, Alert } from 'react-native';
import styles from '../styles/Stylesheet';
import welcome from '../../assets/welcomeImage.png'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import mongoAPI from "../../config/mongoAPI";

const WelcomeScreen = () => {

    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
    });


    const [username, setUsername] = useState(null);
/*     const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null); */
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [details, setDetails] = useState({});
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const navigation = useNavigation();


    useEffect(() => {
        const prepare = () => {
            setDetails(() => ({
                username: username,
                email: email,
                password: password,
            }));
        };
        prepare();
    }, [username, email, password]);

    const registerOnPress = async() => {

        try {
            const res = await mongoAPI.post('/user', details);
            if(res) {
                Alert.alert(`New user ${username} created! Pw is ${password} and email is ${email}`
                )
                navigation.navigate('Login');
                console.log('details', details)
            }
        } catch (error) {
            alert(JSON.stringify(error.response.data.message))
        }
    }

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

export default WelcomeScreen; 