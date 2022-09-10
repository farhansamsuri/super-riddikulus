import React, {useRef, useEffect, useState} from "react";
import { View, TouchableOpacity, ImageBackground, Text, Animated } from 'react-native';
import styles from '../styles/Stylesheet';
import welcome from '../../assets/welcomeImage.png'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Audio } from 'expo-av';

const WelcomeScreen = () => {

    const [sound, setSound] = useState();

    async function playSound() {
    const {sound} = await Audio.Sound.createAsync(
        require('../../assets/audio/HP-theme-Marimba.mp3'),
        /* { shouldPlay: true} */
    );
    setSound(sound);

    await sound.playAsync();
    sound.setStatusAsync({isLooping : true});
    }

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
    });

    useEffect(() => {
  
        playSound();

        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    fadeAnim,
                    {
                        toValue:1,
                        duration:0,
                        useNativeDriver: true
                    }),
                    Animated.timing(
                        fadeAnim, {
                            toValue: 0,
                            delay: 0,
                            duration: 1200,
                            useNativeDriver: true
                        }),
                        Animated.timing(
                            fadeAnim,
                            {
                                toValue:1,
                                duration:1200,
                                useNativeDriver: true
                            }),
                    
            ]),
            {
                iterations: 200
            }
            
            ).start()
    }, [fadeAnim])

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <ImageBackground
                source={welcome}
                style={styles.image}>
                <TouchableOpacity
                    onPress={() => {
                    navigation.navigate('Registration');{Audio.setIsEnabledAsync(false)}}}
                    hitSlop={{ top: 1000, bottom: 1000, left: 1000, right: 1000 }}>
                    <Animated.View style={{opacity: fadeAnim}}>
                        <Text style={styles.welcomeText}>Tap Anywhere To Begin</Text>
                        </Animated.View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default WelcomeScreen; 