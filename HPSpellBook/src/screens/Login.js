import React, {useRef, useEffect, useState, useContext} from "react";
import { View, TouchableOpacity, ImageBackground, Text, Animated, TextInput, Alert } from 'react-native';
import styles from '../styles/Stylesheet';
import welcome from '../../assets/welcomeImage.png'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import mongoAPI from "../../config/mongoAPI";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const {login} = useContext(AuthContext)
    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
    });


/*     const [username, setUsername] = useState(null); */
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [details, setDetails] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        console.log(email, 'email');
        console.log(password, 'password');

        const prepare = () => {
            setDetails(() => ({
                email: email,
                password: password,
            }));
        };
        prepare();
    }, [email, password]);

    const loginUser = async() => {

        try {
            const res = await mongoAPI.post('/user/login', details);
            if(res) {
                Alert.alert(`Successfully logged in!`
                )
                navigation.navigate('Houses');
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
                            placeholder = 'email'
                            value = {email}
                            onChangeText = {setEmail}></TextInput>
                        <TextInput 
                            placeholder = 'password'
                            value = {password}
                            secureTextEntry
                            onChangeText = {setPassword}></TextInput>
                        <TouchableOpacity
                            onPress = {() => {login(details)}}>
                                <Text>Login</Text>
                            </TouchableOpacity>
                            </View>
            </ImageBackground>
        </View>
    );
}

export default Login; 