import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SpellTypeScreen from './src/screens/SpellTypeScreen';
import SpellList from './src/screens/SpellList';
import IndividualSpell from './src/screens/IndividualSpell';
import Search from './src/screens/Search';
import NotesList from './src/screens/NotesList';
import NotesInput from './src/screens/NotesInput';
import IndividualNote from './src/screens/IndividualNote';
import IndividualIngredient from './src/screens/IndividualIngredient';
import IngredientList from './src/screens/IngredientList';
import ElixirDifficultyScreen from './src/screens/ElixirDifficultyScreen';
import ElixirList from './src/screens/ElixirList';
import IndividualElixir from './src/screens/IndividualElixir';
import Houses from './src/screens/Houses';
import HouseDetails from './src/components/HouseDetails'; // TEMPORARY till I can fix the Modal function T^T
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
        {/* <NavigationContainer> */}
            {/* <Stack.Navigator initialRouteName='Welcome'> */}
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
                <Stack.Screen name='IngredientList' component={IngredientList} options={{ headerShown: false }} />
                <Stack.Screen name='Houses' component={Houses} options={{ headerShown: false }} />
                <Stack.Screen name='HouseDetails' component={HouseDetails} options={{ headerShown: false }} />
                <Stack.Screen name='Registration' component={Registration} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} /> */}
                <AppNav />
            {/* </Stack.Navigator> */}
        {/* </NavigationContainer> */}
        </AuthProvider>
    );
}