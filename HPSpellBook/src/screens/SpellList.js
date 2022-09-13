import React from 'react';
import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native';
import styles from "../styles/Stylesheet";
import backgroundImg from '../../assets/bgImage1.png';
import categorybar from '../../assets/categorybar.png'
import dividerImg from '../../assets/Divider.png';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import TabNav from '../components/TabNav';

const SpellList = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const spellTypeDisplay = props.spellType;
    const [spellList, setSpellList] = useState([]);
    const [spellType, setSpellType] = useState('');

    const getSpellList = async () => {
        const { status, data } = await API.get('/Spells');
        const spellList = data.filter(spell => spell.effect[0]) // Filters out spells with effect = []

        if (status === 200) {
            setSpellList(spellList);

        }
    }

    console.log('spellType', spellType);
    spellList.sort((a, b) => a.name.localeCompare(b.name));  // Sorting in alphabetical order 

    const filteredList = spellList.filter(spell => {
        return spell.type === spellType || spell.type === spellType[0] || spell.type === spellType[1] || spell.type === spellType[2] || spell.type === spellType[3]
    })

    useEffect(() => {
        getSpellList();
        setSpellType(route.params ? route.params.spellType : spellType);

    }, [spellTypeDisplay]);

    if (spellType === "CounterSpell") {
        setSpellType(['CounterSpell', 'CounterJinx', 'CounterCharm', 'Untransfiguration'])
    }

    const Item = ({ title }) => (
        <View style={styles.item}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualSpell', { name: title }) }}>
                <Text style={styles.magicText3}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <ImageBackground
                source={backgroundImg}
                style={styles.bg}>
                <ImageBackground
                    source={categorybar}
                    style={styles.bar}>
                    <View style={styles.divider}></View>
                    <View style={styles.divider2}></View>
                    <Text style={styles.header}>{route.params.spellType}</Text>
                    <View style={styles.divider3}></View>
                    <View style={styles.divider4}></View>
                </ImageBackground>
                <Image style={styles.dividerImg}
                    source={dividerImg}></Image>
                <View style={styles.listContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filteredList}
                        renderItem={({ item }) => { return <Item title={item.name} /> }}
                        keyExtractor={item => /* uuid.v4() */item.id}
                        numColumns={2}> {/* item.id to speed up VirtualizedList updating process */}
                    </FlatList>
                </View>

                <TabNav />

            </ImageBackground>
        </View>

    );

}

export default SpellList; 