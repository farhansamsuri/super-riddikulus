import { Dimensions, StyleSheet, } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerS: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    contentButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        left: 72,
        top: -3,
        marginBottom: 8.5
    },

    contentButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'CroissantOne',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 23,
        letterSpacing: -0.3,
    },

    caret: {
        left: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },

    bg: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight,
        resizeMode: 'contain'
    },

    elixirsbg: {
        alignItems: 'center',
        height: windowHeight,
        resizeMode: 'contain'
    },

    barTypes: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 211,
        height: 39,
        margin: 18
    },

    textTypes: {
        color: 'white',
        fontFamily: 'CroissantOne',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 23,
    },

    search: {
        fontFamily: 'CroissantOne',
        fontSize: 16,
        padding: 5,
        color: '#3d3d3d'
    },

    addNoteText: {
        fontFamily: 'CroissantOne',
        fontSize: 16,
        color: '#642210' 
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '120%',
        marginBottom: 2,
    },

    divider2: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '120%',
        marginBottom: 10,
    },

    divider3: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '120%',
        marginTop: 10,
    },

    divider4: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '120%',
        marginTop: 2,
    },

    bar: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: "center",
        width: 211,
        height: 39,
        left: 89,
        top: 82,
    },

    header: {
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        // justifyContent: "center",
        // alignItems: "center",
        lineHeight: 23,
        textTransform: 'uppercase',
        fontFamily: "CroissantOne",
    },

    listContainer: {
        position: 'absolute',
        left: 48,
        top: 159,
        width: 278,
        height: 561
    },

    listContainer2: {
        position: 'absolute',
        left: 48,
        top: 159,
        width: 500,
        height: 561,
    },

    list: {
        marginTop: 5,

    },

    dividerImg: {
        position: 'absolute',
        left: 192,
        top: 140,
    },

    item: {
        padding: 2,
        marginVertical: 5,
        marginHorizontal: 20,
        height: 60,
        width: 111,
    },

    itemElixirList: {
        padding: 2,
        marginVertical: 0,
        marginHorizontal: 100,
        width: 200,
    },

    itemIngredient: {
        padding: 2,
        marginVertical: 1,
        marginHorizontal: 13,
        width: 300,
    },

    ingredientsList: {
        position: 'absolute',
        width: 300,
        height: 380,
        left: 45,
        top: 90
    },

    ingredientName: { 
        color: '#FFFFFF', 
        textAlign: 'center', 
        top: 40, 
        left: 15,
        width: 280
    },

    text: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 21,
        color: '#000000',
        marginTop: 15,
        fontFamily: "CroissantOne",
        letterSpacing: -0.3
    },

    headerText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 21,
        fontFamily: "CroissantOne",
        letterSpacing: -0.3,
        textTransform: 'uppercase'
    },

    ingredientsHeader: {
        fontFamily: "CroissantOne",
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFFFFF',
        position: 'absolute',
        top: 83
    },

    ingredientsElixirs: {
        fontSize: 16,
        color: '#FFFFFF',
        left: 10, 
        top: 30
    },

    elixirText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 21,
        color: '#000000',
        marginTop: 0,
        fontFamily: "CroissantOne",
        letterSpacing: -0.3
    },

    elixirText1: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 21,
        color: '#000000',
        marginTop: 50,
        fontFamily: "CroissantOne",
        letterSpacing: -0.3
    },

    box: {
        justifyContent: "center",
        alignItems: "center",
        border: '2px solid #533007',
        backgroundColor: '#7D490C',
        position: 'absolute',
        height: 36,
        width: 331,
        left: 29,
        top: 135,
    },

    scroll: {
        position: 'absolute',
        height: 320,
        width: 311,
        left: 39,
        top: "20%"
    },

    ingredientsScroll: {
        position: 'absolute',
        width: 390,
        height: 561,
        left: 0,
        top: 107
    },

    return: {
        position: 'absolute',
        height: 36,
        width: 113,
        left: 25,
        top: 523,
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#533007',
        borderWidth: 2,
        backgroundColor: '#7D490C',
    },

    return2: {
        position: 'absolute',
        height: 29,
        width: 190,
        left: 105,
        top: 751,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        fontFamily: "CroissantOne",
    },

    magicText: {
        color: '#FDEA85',
        fontSize: 18,
        fontFamily: "CroissantOne",
    },

    magicText2: {
        color: '#FDEA85',
        fontSize: 12,
        fontFamily: "CroissantOne"
    },

    magicText3: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.3,
        fontFamily: "CroissantOne"
    },

    magicText4: {
        color: '#FFFFFF',
        fontSize: 16,
        letterSpacing: -0.3,
        fontFamily: "CroissantOne", 
        height: 100, 
        width: 250 
    },

    welcomeText: {
        position: 'absolute',
        top: windowHeight * 0.82,
        left: -(windowWidth * 0.2),
        height: 304,
        width: 800,
        fontFamily: "CroissantOne"
    },

    disco: {
        position: 'absolute',
        width: 90,
        height: 70,
        top: 45,
        left: 150,
    },

    glitter: {
        position: 'absolute',
        width: 253,
        height: 253,
        left: 67,
        top: -18
    },

    spellScroll: {
        position: 'absolute',
        top: 108,
        left: 10
    },

    smoke: {
        position: 'absolute',
        width: 280,
        left: 200,
        top: -50
    },

    elixirInnerBg: {
        position: 'absolute'
    },

    elixirHeader: {
        left: 0,
        top: 69
    },

    elixirList: {
        top: 95,
        height: 165,
        left: -40,
        width: 320
    },

    elixirScroll: {
        top: 127,
        width: 277,
        height: 350
    },

    inputNote: {
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        fontFamily: "CroissantOne"
    },

    addNoteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 5, 
        width: 100
    },

    noteCard: {
        width: "85%",
        height: 110,
        margin: 7,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10
    },

    noteCardTitle: {
        fontFamily: 'CroissantOne',
        fontSize: 16
    },

    noteCardPreview: {
        marginTop: 5
    },

    noteCardDate: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: '#3d3d3d'
    },

    housesHeader: {
        position: 'absolute',
        top: '7%'
    },

    flagContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '15%',
        width: '100%',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20
    },

    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '80%'
    },

    scrollDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },

    modalView: {
        margin: 20,
        // backgroundColor: "white",
        padding: 30,
        marginLeft: 35,
        alignItems: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    houseDetails: {
        top: 100,
        width: 390,
        height: 434
    },

    elixirDiffHeader: {
        top: 63
    },

    elixirDiffHeaderText1: {
        fontWeight: '400',
        fontSize: 48,
        lineHeight: 115,
        color: 'white',
        fontFamily: "ParryHotter",
        left: -20,
        width: 75
    },

    elixirDiffHeaderText2: {
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 28,
        color: 'white',
        fontFamily: "CroissantOne",
        left: 10,
        top: -85
    },

    elixirBarTypes: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 102,
        width: 260,
        height: 75,
        margin: 18,
        top: '30%'
    },

    elixirBarText: {
        fontFamily: 'CroissantOne',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 19,
        lineHeight: 28,
    },


    yellowPotion: {
        position: 'absolute',
        top: 215,
        left: 13
    },

    greenPotion: {
        bottom: 233,
        left: 120
    },

    books: {
        position: 'absolute',
        top: 136,
        left: 108,
        height: 175,
        width: 175,
    },

    blueLight: {
        position: 'absolute',
        left: 169,
        top: 57,
        height: 158,
        width: 66,
    },

    loginBar: {
        width : 390,
        height: 61,
    },

    register: {
        fontFamily: 'CroissantOne',
        flexDirection: 'row',
        left: 141,
        top: 7, 
        width: 199,
        height: 17,  
    },

    regLogin: {
        alignItems: 'center',
        fontFamily: 'CroissantOne',
        fontSize:12,
        letterSpacing: -0.3,
    },

    inputLogin: {
        left:66, 
        top:20,
        fontFamily: 'CroissantOne',
        textAlignVertical: 'center'
    },

    loginGlow: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 515,
        height: 160,
        width: 150,
        left: 126,
    },

    loginText: {
        fontFamily: 'CroissantOne',
        fontSize: 18,
        textTransform: 'uppercase',
    },


    bar2: {
        position: 'absolute',
        alignItems: 'center',
        width: 246,
        height: 50,
        left: 72,
        top: 58,
    },

    registerHouses: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: 0, 
        width: 295, 
        marginVertical: 10 
    },
    

    registerGlow: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 77,
        height: 160,
        width: 150,
        left: 120,
    },

    changePW: {
        // position: 'absolute',
        color: '#642210',
        left: 31,
        top: 10,
        fontFamily: 'CroissantOne',
        fontSize: 'normal',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: -0.3
    },

    line: {
        // position: 'absolute',
        color: '#642210',
        left: 50,
        top: 7.5,
        fontWeight: '400'
    },

    logout: {
        // position: 'absolute',
        color: '#642210',
        left: 80,
        top: 10,
        fontFamily: 'CroissantOne',
        fontSize: 'normal',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: -0.3
    },

    userBar: {
        position: 'absolute',
        alignItems: 'space-between',
        flexDirection: 'row',
        top: 58,
        width: 220,
        height: 36,
        left: 161
    },

    userNotesHeader: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: "center",
        width: 211,
        height: 39,
        left: 89,
        top: 82,
    },

    noteslist: {
        width: 358,
        height: 472,
        position: 'absolute',
        top: 222
    },

    profileNotesList: { 
        marginHorizontal: 10, 
        marginVertical: 35, 
        top: 10, 
        left: 10, 
        width: 320 
    },

    profileTabContainer: {
        top: -160, 
        left: 0, 
        width: windowWidth * 0.88,
        flexDirection: 'row'
    },

    profileTabHeader: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: 'normal',
        fontFamily: 'CroissantOne',
        letterSpacing: -0.3, 
        marginHorizontal: 30
    },

    blackbar: {
        position: 'absolute',
        justifyContent: "center",
        width: windowWidth,
        height: 59,
        top: 110
    },

    profileName: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 25,
        fontFamily: 'CroissantOne',
        textAlign: 'left', 
        left: '30%'
    },

    profileEmail: {
        color: '#97ABB1',
        fontSize: 14,
        lineHeight: 14,
        fontFamily: 'CroissantOne',
        textAlign: 'left',
        left: '30%'
    },

    wizardGender: {
        position: 'absolute',
        left: 15,
        top: 60
    },
    
    wizardHouse: {
        position: 'absolute',
        right: 15,
        top: 105
    },

    arrows: {
        position: 'absolute',
        color: '#642210',
        left: 300,
        top: -300
    },
          
    saveText: {
        fontFamily: 'CroissantOne',
        fontSize: 15,
        color: '#642210'
    }, 

    bookmarkContainer: {
        alignItems: 'center',
        left: 137,
        top: -233, 
    },

    bookmarkText: {
        fontFamily: 'CroissantOne',
        fontSize: 15,
        color: '#000000', 
        textAlign: 'center'
    }, 

    bookmarkedItemsProfile: {
        fontFamily: 'CroissantOne',
        fontSize: 15,
        lineHeight: 19, 
        color: '#642210'
    },

    inputEditProfile: {
        fontFamily: 'CroissantOne',
        textAlignVertical: 'center'
    },

    editProfilePress : {
        height:25,
        width:150,
        border: '2px solid black',
        backgroundColor: '#503505',
    },

    editText: {
        fontFamily: 'CroissantOne',
        fontSize: 15,
        color: '#FFFFFF',
        alignItems: 'center',
        borderWidth:1, 
        borderColor:'black',
        textAlign: 'center'
    }, 

});

export default styles; 