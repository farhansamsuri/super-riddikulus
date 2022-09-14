import React, { useRef, useEffect, useState } from "react";
import { View, TouchableOpacity, ImageBackground, Text, Image, TextInput, Alert, TouchableWithoutFeedback, TouchableHighlight, Keyboard } from 'react-native';
import styles from '../styles/Stylesheet';
import imageBg from '../../assets/bgImage1.png'
import registerImg from '../../assets/registration/Register.png'
import registerFemale from '../../assets/registration/registerFemale.png'
import registerMale from '../../assets/registration/registerMale.png'
import houseGry from '../../assets/registration/HouseGry.png'
import houseHuf from '../../assets/registration/HouseHuf.png'
import houseRav from '../../assets/registration/HouseRav.png'
import houseSly from '../../assets/registration/HouseSly.png'
import whiteGlow from '../../assets/whiteglow.png'
import loginBar from '../../assets/loginBar.png'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import mongoAPI, { localAPI } from "../../config/mongoAPI";
import TabNav from "../components/TabNav";

const Registration = () => {

    const [account, setAccount] = useState({
        username: null,
        email: null,
        gender: null,
        password: null,
        house:null
    })
    const [hiddenEmail, setHiddenEmail] = useState(null);
    const [details, setDetails] = useState({});
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const navigation = useNavigation();
    const [genderOp, setGenderOp] = useState({male: 0.4, female:0.4});
    const [houseOp, setHouseOp] = useState ({gry: 0.4, huf: 0.4, rav:0.4, sly:0.4})
    const registerOnPress = async () => {
        const emailCheck = /\S+@\S+\.\S+/;

        if (!account.username) {
            Alert.alert('Please input a name');
            return;
        } else if (!account.gender) {
            Alert.alert('Please select a gender');
            return;
        } else if (!emailCheck.test(account.email)) {
            Alert.alert('Invalid email address');
            return;
        } else if (!account.password || account.password.search(/[A-Z]/) < 0 || account.password.search(/[0-9]/) < 0 || account.password.search(/[a-z]/) < 0 || account.password.length < 8) {
            Alert.alert('Password needs to have : a lowercase and uppercase letter, a number and longer than 7 characters')
            return;
        } else if (!account.house) {
            Alert.alert('Please select a house');
        } else if (passwordRepeat !== account.password) {
            Alert.alert('Passwords do not match!');
            return;
        }

        try {

            const res = await mongoAPI.post('/user', details);
            if (res) {
                
                if (res.data.status == 400) {
                    Alert.alert('Registration Failed', res.data.message);
                    return;
                }
                Alert.alert(`New student ${account.username}, welcome!`)
                navigation.navigate('Login');
                console.log(`details: email - ${hiddenEmail}, name - ${account.username}`)
            }
        } catch (error) {
            alert(JSON.stringify(error.response.data.message))
        }
    }


    useEffect(() => {
        const prepare = () => {
            account.email ? setHiddenEmail(account.email.toLowerCase()) : null;
            setDetails(() => ({
                username: account.username,
                email: hiddenEmail,
                password: account.password,
                gender: account.gender,
                house: account.house
            }));
        };

        prepare();
    }, [account.username, account.password, genderOp, houseOp]);


    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={imageBg}
                    style={styles.bg}>
                    <View style={styles.bar2}>
                        <View style={[styles.divider, { borderBottomColor: '#642210', width: '100%' }]}></View>
                        <View style={[styles.divider2, { borderBottomColor: '#642210', width: '100%' }]}></View>
                        <Image
                            style={styles.registerHeader}
                            source={registerImg}>
                        </Image>
                        <View style={[styles.divider3, { borderBottomColor: '#642210', width: '100%' }]}></View>
                        <View style={[styles.divider4, { borderBottomColor: '#642210', width: '100%' }]}></View>
                    </View>

                    <ImageBackground
                        source={loginBar}
                        style={[styles.loginBar, { marginTop: -100 }]}>
                        <TextInput
                            placeholder='Name'
                            value={account.username}
                            onChangeText={(text) => setAccount({...account, username:text})}
                            style={styles.inputLogin}></TextInput>
                    </ImageBackground>

                    <Text style={[styles.inputLogin, { left: -102, opacity: 0.4, top: 1 }]}>Gender</Text>
                    <View style={{ flexDirection: 'row', height: 101, width: 500, marginBottom: 4 }}>
                        <TouchableHighlight
                            onPress = {() => {setAccount({...account, gender:'male'}); setGenderOp({male: 1, female:0.4})}}
                            underlayColor= 'none'>
                        <Image
                            source={registerMale}
                            style={{ left: 108 + 35, width: 70, opacity:genderOp.male }}>
                        
                            </Image>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress = {() => {setAccount({...account, gender:'female'}); setGenderOp({male: 0.4, female:1.0})}}
                            underlayColor= 'none'>
                        <Image
                            source={registerFemale}
                            style={{ left: 212, width: 70, opacity:genderOp.female }}>
                                </Image>
                        </TouchableHighlight>

                    </View>



                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                        <TextInput
                            placeholder='Email'
                            value={account.email}
                            onChangeText={(text) => setAccount({...account, email:text})}
                            style={styles.inputLogin}></TextInput>
                    </ImageBackground>

                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                        <TextInput
                            placeholder='Password'
                            value={account.password}
                            secureTextEntry
                            onChangeText={(text) => setAccount({...account, password:text})}
                            style={styles.inputLogin}></TextInput>
                    </ImageBackground>

                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                        <TextInput
                            placeholder='Confirm password'
                            value={passwordRepeat}
                            secureTextEntry
                            onChangeText={setPasswordRepeat}
                            style={styles.inputLogin}></TextInput>
                    </ImageBackground>

                    <Text style={[styles.inputLogin, { left: -102, opacity: 0.4, top: 1 }]}>House</Text>
                    <View style={{ flexDirection: 'row', height: 0, width: 295, marginBottom: 4 }}>

                        <TouchableOpacity
                            onPress = {() => {setAccount({...account, house:'gryffindor'}), setHouseOp({gry:1, huf:0.4, rav:0.4, sly:0.4})}}>

                        <Image
                            source={houseGry}
                            style={{ left: 0, top: 10, width: 70, opacity:houseOp.gry }}>
                        
                            </Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {() => {setAccount({...account, house:'hufflepuff'}), setHouseOp({gry:0.4, huf:1, rav:0.4, sly:0.4})}}>
                        <Image
                            source={houseHuf}
                            style={{ left: 5, top: 10, width: 70, opacity:houseOp.huf}}>
                                </Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {() => {setAccount({...account, house:'ravenclaw'}), setHouseOp({gry:0.4, huf:0.4, rav:1, sly:0.4})}}>
                        <Image
                            source={houseRav}
                            style={{ left: 5, top: 10, width: 70, opacity:houseOp.rav }}>
                                </Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {() => {setAccount({...account, house:'slytherin'}), setHouseOp({gry:0.4, huf:0.4, rav:0.4, sly:1})}}>
                        <Image
                            source={houseSly}
                            style={{ left:5, top: 10, width: 70, opacity:houseOp.sly }}>
                                </Image>
                        </TouchableOpacity>

                    </View>



                    <View style={{ flexDirection: 'row', marginTop: 14, left: 25 }}>
                        <Text style={[styles.regLogin,]}>Already a member?</Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Login') }}
                        >
                            <Text style={[styles.regLogin, { color: '#642210', left: 2 }]}>Back to login page</Text>
                        </TouchableOpacity>
                    </View>

                    <ImageBackground
                        source={whiteGlow}
                        style={styles.registerGlow}>
                        <TouchableOpacity
                            onPress={registerOnPress}
                            hitSlop={{ top: 20, bottom: 30, left: 10, right: 10 }}>
                            <Text style={styles.loginText}>Sign Up</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <TabNav />
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Registration; 