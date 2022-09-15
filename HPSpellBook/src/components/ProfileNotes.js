import mongoAPI from '../../config/mongoAPI';
import { Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Stylesheet";
import noteslistBg from '../../assets/profile/profileNotesBg.png';
import NoteCard from "./NoteCard";
import { AuthContext } from '../contexts/AuthContext';


const ProfileNotes = (props) => {

    const navigation = useNavigation();
    const { userToken } = useContext(AuthContext);
    const [notesList, setNotesList] = useState([]);

    const getNotesList = async () => {
        const { status, data } = await mongoAPI.get('/note', {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        });
        const notesList = data.data.filter(n => n.userId === props.userInfo.data.id);
        const sortedNotesList = notesList.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)); // sorts note list based on most recently updated

        if (status === 200) {
            setNotesList(sortedNotesList);
        }
    }

    useEffect(() => {
        getNotesList();
    }, [notesList]);

    return (<>
        <ImageBackground
            source={noteslistBg}
            style={styles.noteslist}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('NotesInput') }}>
                <Text style={[styles.addNoteText, { left: 115, top: 55, margin: 15 }]}>
                    + Add note
                </Text>
            </TouchableOpacity>
            <ScrollView style={styles.profileNotesList} indicatorStyle='black'>
                {notesList[0] ?
                    notesList.map(n =>
                        <NoteCard
                            key={n._id}
                            title={n.title}
                            date={n.updatedAt}
                            preview={n.body}
                            id={n._id}
                        />)
                    :
                    <Text style={[styles.search, { textAlign: 'center' }]}>Add your first note</Text>
                }
            </ScrollView>
        </ImageBackground>
    </>)
}

export default ProfileNotes;