import { Text, View } from 'react-native';
import { useState} from 'react';
import { styles } from '../Style/Styles';
import { CharCount } from '../Component/CharCount';
import ExistWords from '../Component/ExistWords';
import LetterSelector from '../Component/LetterSelector';
import GenerateButton from '../Component/GenerateButton';

export const Main = ({navigation}) => {

    let [length, setLength] = useState(7);

    return (
        <View>
            <ExistWords/>
            <CharCount setLength={setLength} />
            <LetterSelector />
            <GenerateButton />
        </View>
    )
}

export default Main;