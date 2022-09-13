import API from "../../API";
import { useContext, useEffect, useState } from "react";
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

    const {addSpell} = useContext(AuthContext)
    const navigation = useNavigation();
    const [spellList, setSpellList] = useState([]);
    const route = useRoute();
    const filteredSpell = spellList.filter(spell => spell.name === route.params.name)


    const getSpellList = async () => {
        const { status, data } = await API.get('/Spells');
        const spellList = data;
        if (status === 200) {
            setSpellList(spellList)
        }
        return (spellList)
    }



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
                        <TouchableOpacity 
                            onPress = {() => {addSpell({
                                id: filteredSpell[0].id,
                                name: filteredSpell[0].name})}}>
                                <Text>Save Spell</Text>
                        </TouchableOpacity>
                    </Text>
                </View>

                <TabNav />

            </ImageBackground>
        </View>
    );
}

export default IndividualSpell; 