import { Text, View } from 'react-native';
import React, { useState } from "react";
import { styles } from '../Style/Styles';
import Toggle from "react-native-toggle-element";

export const ExistWords = () => {

    const [toggleValue, setToggleValue] = useState(true);

    return (
        <View style={styles.section}>
            <Text style={styles.text}>Display actual words only</Text>
            <Toggle
                value={toggleValue}
                onPress={(newState) => setToggleValue(newState)}
                trackBar={{
                    activeBackgroundColor: "#1c1c1c",
                    inActiveBackgroundColor: "#3c4145",
                    borderActiveColor: "black",
                    borderInActiveColor: "#1c1c1c",
                    borderWidth: 5,
                    width: 100,
                }}
                thumbButton={{
                    activeBackgroundColor: "#FFD700",
                    inActiveBackgroundColor: "#FFF8DC",
                }}
                leftTitle="no"
                rightTitle="yes"
            />
        </View>
    )
}

export default ExistWords;