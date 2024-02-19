import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './Navigation/Main';
import { Logo } from './Component/Logo';
import { styles } from './Style/Styles';

const Background = require('./assets/WordsBackground.png');
export default function App() {
    return (
        <NavigationContainer>
            <ImageBackground source={Background} style={styles.backgroundImage}>
            <Logo/>
            <Main/>
            <StatusBar style="auto" />
            </ImageBackground>
        </NavigationContainer>
  );
}