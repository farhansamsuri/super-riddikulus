import API from "../../API";
import { useEffect, useState } from "react";
import { View, StatusBar, Text, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from "../styles/Stylesheet";
import ingredientDetailsBg from "../../assets/ingredientsDetailsBg.png";
import ingredientsScroll from "../../assets/ingredientsScroll.png";
import glitter from '../../assets/glitter.gif';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';


const IndividualIngredient = () => {

    const navigation = useNavigation();
    const [ingredientList, setIngredientList] = useState([]);
    const [elixirList, setElixirList] = useState([]);

    const getIngredientList = async () => {
        const { status, data } = await API.get('/Ingredients');
        const ingredientList = data;
        
        if (status === 200) {
            setIngredientList(ingredientList);

        }
    }

    const getElixirList = async () => {
        const { status, data } = await API.get('/Elixirs');
        const elixirList = data;

        if (status === 200) {
            setElixirList(elixirList);

        }
    }

    useEffect(() => {
        getIngredientList();
        getElixirList();
    }, []);

    const route = useRoute();

    const filteredElixir = elixirList.filter(eachVal => {
        let opt = eachVal.ingredients.some(e => e.name === route.params.name);
        return opt;
    });


    const filteredIngredient = ingredientList.filter(ingredient => ingredient.name === route.params.name)
 

    const Item = ({ title }) => (
        <View style={styles.ingredientItem2}>
            <TouchableOpacity style={styles.title} onPress={() => { navigation.navigate('IndividualElixir', { name: title }) }}>
                <Text style={styles.ingredientText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (

        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={ingredientDetailsBg}
                resizeMode="cover"
                style={styles.image}>
                <Image source={glitter}
                    style={styles.glitter} />
                <Image source={ingredientsScroll}
                    style={styles.ingredientsScroll} />
                <View style={styles.ingredientsBox}>
                    <Text style={styles.ingredientsText}>INGREDIENT:{"\n"}{filteredIngredient[0] ? filteredIngredient[0].name : 'Nil'}</Text>
                </View>
                <View style={styles.ingredientsScroll2}>
                    <Text style={styles.ingredientsText}>ELIXIRS:</Text>
                    <View>
                <FlatList
                        showsVerticalScrollIndicator
                        data={filteredElixir}
                        renderItem={({ item }) => { return <Item title={item.name} /> }}
                        keyExtractor={item => uuid.v4()}
                        numColumns={1}>
                    </FlatList>
                </View>
                </View>
            </ImageBackground>
        </View>
        
    );
}

export default IndividualIngredient; 