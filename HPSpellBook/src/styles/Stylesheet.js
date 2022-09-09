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

    bg: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight,
        resizeMode: 'contain'
    },

    barTypes: {
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

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    image: {
        flex: 1,
        height: windowHeight,
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

    ingredientBar: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: "center",
        width: 137,
        height: 28,
        left: 152,
        top: 83,
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

    ingredientHeader: {
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

    ingredientListContainer: {
        position: 'absolute',
        left: 85,
        top: 217,
        width: 214,
        height: 323,
        color: '#FFFFFF'
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

    ingredientItem: {
        padding: 2,
        marginVertical: 1,
        marginHorizontal: 20,
        height: 20,
        width: 180,
    },

    itemElixir: {
        padding: 2,
        marginVertical: 5,
        marginHorizontal: 20,
        width: 111
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
        height: 500,
        width: 311,
        left: 39,
        top: 200
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

    ingredientText: {
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.3,
        fontFamily: "CroissantOne"
    },

    welcomeText: {
        position: 'absolute',
        top: 681,
        left: 110,
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

    spellScroll: {
        position: 'absolute',
        top: 108,
        left: 10
    },

    noteContainer: {
        alignItems: 'center',
        flex: 1,
        position: 'absolute',
        top: 100,
        width: '100%',
        height: windowHeight - 200,
        paddingLeft: "10%",
        paddingTop: "10%",
        paddingBottom: "5%"
    },

    inputNote: {
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'rgba(255,255,255, 0.6)',
        fontSize: 16,
        fontFamily: "CroissantOne"
    },

    addNote: {
        alignItems: 'center',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black'
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
        alignItems:'flex-start',
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
        position: 'absolute', 
        top: 310, 
        width: 390, 
        height: 434
    },

    inputBox: {
        position: 'absolute', 
        top: 620, 
        left: 170,
        width: 390, 
        height: 434
    },

    glitter: {
        position: 'absolute',
        width: 253,
        height: 253,
        top: -18,
        left: 67,
    },

    ingredientsScroll: {
        position: 'absolute',
        top: 107,
        width: 390,
        height: 561,
    },

    ingredientsScroll2: {
        position: 'absolute',
        top: 319,
        left: 67,
        width: 250,
        height: 150,
    },

    ingredientsBox: {
        position: 'absolute',
        height: 120,
        width: 190,
        left: 120,
        top: 209,
    },

    ingredientsText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: "CroissantOne",
    },

    ingredientItem2: {
        padding: 2,
        marginVertical: 5,
        marginHorizontal: 20,
        height: 20,
        width: 250,
    },

});

export default styles; 