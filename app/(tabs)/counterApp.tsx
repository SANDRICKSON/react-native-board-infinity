import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Button, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import CounterDisplay from "@/app/components/CounterDisplay";

const Tab = createBottomTabNavigator();

const CounterApp: React.FC = () => {

    const [count, setCount] = React.useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement= ()=>{
        setCount(count - 1);
    }


    return (
        <View style={styles.container}>
            <CounterDisplay count={count}/>
            <Button title="+" onPress={increment}></Button>
            <Button title="-" onPress={decrement}></Button>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin:10,
            gap:10
        },

        counterText:{
            fontSize: 30,
            fontWeight: "bold",
        }
    }
)
export default CounterApp;