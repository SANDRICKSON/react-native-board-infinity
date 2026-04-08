import React from 'react';
import {Button, FlatList, FlexAlignType, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {Image} from "expo-image";
import {GestureHandlerRootView} from "react-native-gesture-handler";


interface Product {
    id: number;
    name: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Apple iPhone 15",
        image: "https://images.pexels.com/photos/5081929/pexels-photo-5081929.jpeg",
    },
    {
        id: 2,
        name: "Nike Air Max Sneakers",
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        image: "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg",
    },
    {
        id: 4,
        name: "MacBook Pro 16\"",
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },
    {
        id: 5,
        name: "Canon EOS R5 Camera",
        image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    },
];




export default function Index() {
    const window = useWindowDimensions();
    const numColumns = window.width > 600 ? 3 : 2;

    const renderItem = ({ item }: { item: Product }) => {
        return (
            <View style={{ flex: 1, margin: 5 }}>
                <Text>{item.name}</Text>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: '100%', height: 100 }}
                />
            </View>
        );
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                contentContainerStyle={{ padding: 10 }}
            />
        </GestureHandlerRootView>
    );
}