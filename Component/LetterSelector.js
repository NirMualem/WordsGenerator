import { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, StatusBar, SafeAreaView } from 'react-native';
import { styles } from '../Style/Styles';

const EnglishLetters = 26;
const EngAlphaBet = [{ id: 0, letter: 'A', choose: false }, { id: 1, letter: 'B', choose: false }, { id: 2, letter: 'C', choose: false }, { id: 3, letter: 'D', choose: false }, { id: 4, letter: 'E', choose: false }, { id: 5, letter: 'F', choose: false }, { id: 6, letter: 'G', choose: false }, { id: 7, letter: 'H', choose: false }, { id: 8, letter: 'I', choose: false }, { id: 9, letter: 'J', choose: false }, { id: 10, letter: 'K', choose: false }, { id: 11, letter: 'L', choose: false }, { id: 12, letter: 'M', choose: false }, { id: 13, letter: 'N', choose: false }, { id: 14, letter: 'O', choose: false }, { id: 15, letter: 'P', choose: false }, { id: 16, letter: 'Q', choose: false }, { id: 17, letter: 'R', choose: false }, { id: 18, letter: 'S', choose: false }, { id: 19, letter: 'T', choose: false }, { id: 20, letter: 'U', choose: false }, { id: 21, letter: 'V', choose: false }, { id: 22, letter: 'W', choose: false }, { id: 23, letter: 'X', choose: false }, { id: 24, letter: 'Y', choose: false }, { id: 25, letter: 'Z', choose: false }];

const Button = ({ button, onPress, backgroundColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.letterFrame, { backgroundColor }]}>
        <Text style={styles.letters}>{button.letter}</Text>
    </TouchableOpacity>
);


export const LetterSelector = () => {
    const [selectedId, setSelectedId] = useState();
    const [chooseLetters, setChooseLetters] = useState(false);

    const renderButton = (button) => {
        const backgroundColor = button.item.choose ? '#FFD700' : '#FFF8DC';

        return (
            <Button
                button={button.item}
                onPress={() => { button.item.choose = !button.item.choose; setSelectedId(button.item.id) }}
                backgroundColor={backgroundColor}
                />
        );
    };

    return (
        <View style={[styles.section, { maxHeight:220 }]}>
            <TouchableOpacity style={styles.button} onPress={() => setChooseLetters(!chooseLetters)}>
                <Text>Letters select</Text>
            </TouchableOpacity>
            {chooseLetters && 
            <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight || 0}}>
                <FlatList
                    data={EngAlphaBet}
                    renderItem={renderButton}
                    contentContainerStyle={{ alignItems: 'center' }}
                    numColumns={9}
                    keyExtractor={button => button.id}
                    extraData={selectedId}
                />
                </SafeAreaView>
            }
        </View>
    )
}

export default LetterSelector;