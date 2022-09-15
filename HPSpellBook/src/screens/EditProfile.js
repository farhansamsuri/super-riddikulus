import React, { useRef, useEffect, useState, useContext } from "react";
import { View, TouchableOpacity, ImageBackground, Text, Image, TextInput, Alert, TouchableWithoutFeedback, TouchableHighlight, Keyboard } from 'react-native';
import styles from '../styles/Stylesheet';
import logoutBar from '../../assets/profile/logoutBar.png';
import blackbar from '../../assets/notes/blackbar.png';
import wizardGirl from '../../assets/notes/wizardGirl.png'
import wizardBoy from '../../assets/notes/wizardBoy.png'
import houseGry from '../../assets/registration/HouseGry.png'
import houseHuf from '../../assets/registration/HouseHuf.png'
import houseRav from '../../assets/registration/HouseRav.png'
import houseSly from '../../assets/registration/HouseSly.png'
import loginBar from '../../assets/loginBar.png'
import notesBG from '../../assets/notes/notesBG.png';
import { useNavigation } from '@react-navigation/native';
import mongoAPI, { localAPI } from "../../config/mongoAPI";
import TabNav from "../components/TabNav";
import { AuthContext } from "../contexts/AuthContext";

const EditProfile = () => {


    const { logout, userInfo, editPassword, editAccount } = useContext(AuthContext);
    const [account, setAccount] = useState({
        username: null,
        email: null,
        oldPass: null,
        newPass: null,
        confirmPass: null,
        house:null
    })
    const [houseOp, setHouseOp] = useState ({gry: 1, huf: 0.4, rav:0.4, sly:0.4})


    useEffect(() => {
        console.log('userInfo:', userInfo)
    }, [account])

    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={notesBG}
                    style={styles.bg}>
                <ImageBackground
                    source={logoutBar}
                    style={styles.userBar}>

                    <TouchableOpacity
                        onPress={() => { logout() }}>
                        <Text style={styles.logout}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>


                <ImageBackground
                    style={styles.blackbar}
                    source={blackbar}>
                    <Text style={styles.profileName}>{userInfo.data.username}</Text>
                    <Text style={styles.profileEmail}>{userInfo.data.email}</Text>
                </ImageBackground>
                

                    <ImageBackground
                        source={loginBar}
                        style={[styles.loginBar, { marginTop: 20}]}>
                            <Text style={[styles.inputLogin, { left: 60, top: 10 }]}>Display Name</Text>
                        <TextInput
                            placeholder= {`${userInfo.data.username}`}
                            value={account.username}
                            onChangeText={(text) => setAccount({...account, username:text})}
                            style={styles.inputEditProfile}
                            textAlign={'center'}></TextInput>
                    </ImageBackground>                

                <TouchableOpacity
                    onPress = {() => {editAccount({username: account.username})}}
                    style= {[{margin:10, left:70}, styles.editProfilePress]}>
                        <Text style={styles.editText}>Change Name</Text>
                    </TouchableOpacity>

                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                            <Text style={[styles.inputLogin, { left: 60, top: 10 }]}>Old Password</Text>
                            <TextInput
                            placeholder='Old Password'
                            value={account.password}
                            secureTextEntry
                            onChangeText={(text) => setAccount({...account, oldPass:text})}
                            style={styles.inputEditProfile}
                            textAlign={'center'}></TextInput>
                    </ImageBackground>



                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                            <Text style={[styles.inputLogin, { left: 60, top: 10 }]}>New Password</Text>
                        <TextInput
                            placeholder='New Password'
                            value={account.password}
                            secureTextEntry
                            onChangeText={(text) => setAccount({...account, newPass:text})}
                            style={styles.inputEditProfile}
                            textAlign={'center'}></TextInput>
                    </ImageBackground>

                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
                            <Text style={[styles.inputLogin, { left: 60, top: 10 }]}>Confirm Password</Text>
                        <TextInput
                            placeholder='Confirm Password'
                            value={account.password}
                            secureTextEntry
                            onChangeText={(text) => setAccount({...account, confirmPass:text})}
                            style={styles.inputEditProfile}
                            textAlign={'center'}></TextInput>
                    </ImageBackground>


                    <TouchableOpacity
                    onPress = {() => {editPassword(account.oldPass, account.newPass, account.confirmPass)}}
                    style= {[{margin:10, left:70}, styles.editProfilePress]}>
                        <Text style={styles.editText}>Change Password</Text>
                    </TouchableOpacity>

                    <ImageBackground
                        source={loginBar}
                        style={styles.loginBar}>
 

                     <View style={[styles.registerHouses, {left: 50, top:-15, marginTop:15, justifyContent: 'center', alignItems: 'stretch'}]}>

                        <TouchableOpacity
                            onPress = {() => {setAccount({...account, house:'gryffindor'}), setHouseOp({gry:1, huf:0.4, rav:0.4, sly:0.4})}}>

                        <Image
                            source={houseGry}
                            style={{ width: 70, opacity:houseOp.gry }}>
                        
                            </Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {() => {setAccount({...account, house:'hufflepuff'}), setHouseOp({gry:0.4, huf:1, rav:0.4, sly:0.4})}}>
                        <Image
                            source={houseHuf}
                            style={{ width: 70, opacity:houseOp.huf}}>
                                </Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {() => {setAccount({...account, house:'ravenclaw'}), setHouseOp({gry:0.4, huf:0.4, rav:1, sly:0.4})}}>
                        <Image
                            source={houseRav}
                            style={{ width: 70, opacity:houseOp.rav }}>
                                </Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {() => {setAccount({...account, house:'slytherin'}), setHouseOp({gry:0.4, huf:0.4, rav:0.4, sly:1})}}>
                        <Image
                            source={houseSly}
                            style={{ width: 70, opacity:houseOp.sly }}>
                                </Image>
                        </TouchableOpacity>

                        

                    </View>
                    </ImageBackground>

                    <TouchableOpacity
                    style= {[{margin:15, left:70}, styles.editProfilePress]}>
                        <Text style={styles.editText}>Change House</Text>
                    </TouchableOpacity>

                    <Image
                    style={styles.wizardGender}
                    source={userInfo.data.gender === 'male' ? wizardBoy : wizardGirl} />
                <Image
                    style={styles.wizardHouse}
                    source={userInfo.data.house === 'gryffindor' ? houseGry
                        : userInfo.data.house === 'hufflepuff' ? houseHuf
                            : userInfo.data.house === 'slytherin' ? houseSly
                                : houseRav} />

                    <TabNav />
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default EditProfile; 