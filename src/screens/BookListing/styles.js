import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create ({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor:'black'
    },
    listBox: {
        height: 210,
        width: '30%',
        marginBottom: 10
    },
    imgBox: {
        height: 160,
        width: '100%',
    },
    headerContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems:'center',
        marginBottom:20
    },
    titleView: {
        flexDirection: 'row',
        flex:1
    },
    headerTxt: {
        fontSize: 18,
        marginTop: -5,
        fontFamily:'TitilliumWeb-Regular'
    },
    back: {
        resizeMode: 'contain',
        height: 20,
        alignSelf:'center',
    },
    searchBtn: {
        height: 40,
        flex:0.2,
        justifyContent:'center'
    },
    searchView: {
        height: 42,
        width: '70%',
        borderColor: '#60475A',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 15,
        marginRight: 4,
    },
    textinputStyle: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        color: 'white',
    },
    listText:{
        fontFamily:'TitilliumWeb-Regular'
    },
    noRecordTxt:{
        alignSelf:"center",
        fontFamily:'TitilliumWeb-Regular',
        marginTop:'50%'
    }

});