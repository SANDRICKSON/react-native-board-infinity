import React from 'react';
import {FlexAlignType, StyleSheet, Text, View} from 'react-native';


interface GreetingProps {
    name: string;
    age: number;
}


const Greeting: React.FC<GreetingProps> = ({name, age}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello {name}</Text>
            <Text style={styles.text}>You are {age} years old</Text>
        </View>
    )
}

export default function HomeScreen() {
    const items = ['Apple', 'Banana', 'Cherry'];


    return (
        <View style={styles.container}>

            <Greeting name={"Sandro"} age={12}/>
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