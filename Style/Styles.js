import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    logo: {
        color: '#C0C0C0',
        fontWeight: 'bold',
        letterSpacing: 5,
        fontSize: 30,
        marginTop: 70,
        marginBottom: 20,
    },
    text: {
        fontSize: 25,
        marginBottom:10,
        color: '#FFF8DC',
    },
    section: {
        alignItems: 'center',
        margin: 15,
    },
    letters: {
        color: 'black',
        width: 20,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,       
        margin: 5,
        borderRadius: 12,
    },
    letterFrame: {
        width: 25,
        alignItems: 'center',
        margin: 5,
        borderRadius: 12,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F0E68C',
        padding: 10,
        borderRadius: 12,
    },
});

export { styles };