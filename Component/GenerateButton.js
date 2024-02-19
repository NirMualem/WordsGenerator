import { Text, View, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { styles } from '../Style/Styles';

export const GenerateButton = () => {
    return (
        <View style={styles.section}>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 30 }}>Generate</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GenerateButton;