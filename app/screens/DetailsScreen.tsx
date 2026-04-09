import React from 'react';
import {Button, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/type";

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ route }) => {
    const {itemId} = route.params;
    return (
        <View>
            <Text>Details Screen</Text>
            <Text>Item Id: {itemId}</Text>
        </View>
    );
};

export default DetailsScreen;


// 8:45