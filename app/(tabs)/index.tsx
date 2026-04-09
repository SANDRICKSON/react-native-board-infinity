import {Text, View, StyleSheet} from "react-native";
import React, {useEffect} from "react";


const AutoIncrementCounter: React.FC = () => {

    const [counter, setCounter] = React.useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1)
        return () => clearInterval(interval)
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Counter: {counter}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    text: {
        fontSize: 20,
        color: '#333',
    }
})
export default AutoIncrementCounter;