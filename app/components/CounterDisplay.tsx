import {StyleSheet, Text, View} from "react-native";
import {inspect} from "node:util";


type CounterDisplayProps = {
    count: number
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Counter: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin:10
        },

        counterText:{
            fontSize: 30,
            fontWeight: "bold",
        }
    }
)


export default CounterDisplay;