import React from 'react';
import API from "../../API";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native';
import styles from "../styles/Stylesheet";
import ingredientsBg from '../../assets/ingredientsBg.png'; 
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";


const IngredientList = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [ingredientList, setIngredientList] = useState([]);

    const getIngredientList = async () => {
        const { status, data } = await API.get('/Ingredients');
        const ingredientList = data;

        if (status === 200) {
            setIngredientList(ingredientList);

        }
    }

    ingredientList.sort((a, b) => a.name.localeCompare(b.name));  // Sorting in alphabetical order 

    useEffect(() => {
        getIngredientList();

    }, []);

    const Item = ({ title }) => (
        <View style={styles.ingredientItem}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualIngredient', { name: title }) }}>
                <Text style={styles.ingredientText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <ImageBackground
                source={ingredientsBg}
                resizeMode="cover"
                style={styles.image}>
                <View style={styles.ingredientBar}>
                    <Text style={styles.header}>Ingredients</Text>
                </View>
                <View style={styles.ingredientListContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={ingredientList}
                        renderItem={({ item }) => { return <Item title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}
                        numColumns={1}>
                    </FlatList>
                </View>
            </ImageBackground>
        </View>

    );

}

export default IngredientList; 