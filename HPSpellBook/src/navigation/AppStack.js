import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack'; */
import Houses from '../screens/Houses';
import { AuthContext } from '../context/AuthContext';


const Stack = createNativeStackNavigator();

const AppStack = () => {

    const {isLoading, userToken} = useContext(AuthContext);

    if ( isLoading ) {
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
    }

    return (
        
            <Stack.Navigator initialRouteName='Houses'>
{/*                 <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SpellTypes' component={SpellTypeScreen} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='SpellList' component={SpellList} options={{ headerShown: false }} />
                <Stack.Screen name='IndividualSpell' component={IndividualSpell} options={{ headerShown: false }} />
                <Stack.Screen name='ElixirDifficulty' component={ElixirDifficultyScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ElixirList' component={ElixirList} options={{ headerShown: false }} />
                <Stack.Screen name='IndividualElixir' component={IndividualElixir} options={{ headerShown: false }} />
                <Stack.Screen name='Search' component={Search} options={{ animation: 'fade_from_bottom', headerTintColor: 'black', headerTitleStyle: { fontFamily: 'CroissantOne', fontWeight: 'bold' } }} />
                <Stack.Screen name='NotesList' component={NotesList} options={{ animation: 'fade', headerShown: false }} />
                <Stack.Screen name='NotesInput' component={NotesInput} options={{ title: '', headerTintColor: 'black' }} />
                <Stack.Screen name='IndividualNote' component={IndividualNote} options={{ headerShown: false }} />
                <Stack.Screen name='IndividualIngredient' component={IndividualIngredient} options={{ headerShown: false }} />
                <Stack.Screen name='IngredientList' component={IngredientList} options={{ headerShown: false }} /> */}
                <Stack.Screen name='Houses' component={Houses} options={{ headerShown: false }} />
{/*                 <Stack.Screen name='HouseDetails' component={HouseDetails} options={{ headerShown: false }} /> */}
{/*                 <Stack.Screen name='Registration' component={Registration} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} /> */}
            
        </Stack.Navigator>
    )
}

export default AppStack