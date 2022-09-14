import API from "../../API";
import { useEffect, useState, useContext } from "react";
import { View, StatusBar, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from "../styles/Stylesheet";
import detailsBg from "../../assets/individualSpellBG.png";
import spellScroll from "../../assets/kraftpaper.png";
import disco from '../../assets/circle2.gif';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import TTS from "../components/TTS";
import TabNav from "../components/TabNav";
import { AuthContext } from "../contexts/AuthContext";


const IndividualSpell = () => {

    const {addSpell, deleteSpell} = useContext(AuthContext)
    const navigation = useNavigation();
    const [spellList, setSpellList] = useState([]);

    const getSpellList = async () => {
        const { status, data } = await API.get('/Spells');
        const spellList = data;
        if (status === 200) {
            setSpellList(spellList)
        }
    }

    const route = useRoute();
    const filteredSpell = spellList.filter(spell => spell.name === route.params.name)

    useEffect(() => {
        getSpellList();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={detailsBg}
                style={styles.bg}>
                <Image source={disco}
                    style={styles.disco} />
                <Image source={spellScroll}
                    style={styles.spellScroll} />
                <View style={styles.box}>
                    <Text style={styles.magicText}>{filteredSpell[0] ? filteredSpell[0].name : 'Nil'}</Text>
                </View>
                <View style={styles.scroll}>
                    <Text style={styles.text}>Type:
                        <Text style={{ fontSize: 17 }}>{"\n"}{filteredSpell[0] ? filteredSpell[0].type : 'Nil'}</Text>
                    </Text>
                    <Text style={styles.text}>Effect:
                        <Text style={{ fontSize: 17 }}>{"\n"}{filteredSpell[0] ? filteredSpell[0].effect : 'Nil'}</Text>
                    </Text>
                    <Text style={styles.text}>Incantation:
                        <Text style={{ fontSize: 17 }}>{"\n"}{filteredSpell[0] && filteredSpell[0].incantation ? filteredSpell[0].incantation : 'Nil'} </Text> 
                        <TTS icon={filteredSpell[0] && filteredSpell[0].incantation ? "volume-up" : null} incantation={filteredSpell[0] ? filteredSpell[0].incantation : null} />
                    </Text>
                    <Text style={styles.text}>Light:
                        <Text style={{ fontSize: 17 }}>{"\n"}{filteredSpell[0] ? filteredSpell[0].light : 'Nil'}</Text>
                    </Text>

                    <TouchableOpacity 
                            onPress = {() => {addSpell({
                                id: filteredSpell[0].id,
                                name: filteredSpell[0].name})}}>
                                <Text style={[{left: 206}, styles.saveText]}>Save Spell</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress = {() => {deleteSpell(
                                filteredSpell[0].id
                               )}}>
                                <Text style={[{left: 206, top:30}, styles.saveText]}>Delete Spell</Text>
                        </TouchableOpacity>

                </View>

                <TabNav />

            </ImageBackground>
        </View>
    );
}

export default IndividualSpell; 