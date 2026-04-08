import React from 'react';
import {Button, FlexAlignType, StyleSheet, Text, View} from 'react-native';
import {Space_Separator} from "json5/lib/unicode";


export default function Counter() {
    const [count, setCount] = React.useState<number>(0);


    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    return (
        <View style={styles.container}>
            <Text>Counter App</Text>
            <Text style={styles.text}>{count}</Text>
            <Button title="Increase" onPress={increment}></Button>
            <Button title="Decrease" onPress={decrement}></Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center' as FlexAlignType,
        justifyContent: 'center',
    },

    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})