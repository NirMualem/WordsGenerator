import { Text, View } from 'react-native';
import { useState } from 'react';
import { styles } from '../Style/Styles';
import Counter from "react-native-counters";
import Feather from 'react-native-vector-icons/Feather';

export const CharCount = (setLength) => {

    const minusIcon = (isDisabled) => {
        return <Feather name='minus' size={20} color={'#F0E68C'} />
    };

    const plusIcon = (isPlusDisabled) => {
        return <Feather name='plus' size={20} color={'#F0E68C'} />
    };

    return (
        <View style={styles.section}>
            <Text style={styles.text}>Word length</Text>
            <Counter start={7}
                buttonStyle={{ borderColor: '#F0E68C', borderRadius: 30 }}
                countTextStyle={{ color: 'white' }}
                min={2}
                max={45}
                minusIcon={minusIcon}
                plusIcon={plusIcon}
                onChange={() =>  console.log(this) }
            />
            
        </View>
    )
}

export default CharCount;