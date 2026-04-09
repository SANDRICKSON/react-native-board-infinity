import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Item {
    id: number;
    title: string;
}

const ITEMS_PER_PAGE = 10;

export default function PaginatedList(): React.JSX.Element {
    const [items, setItems] = useState<Item[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchData = async () => {
        if (loading || !hasMore) return; // ✅ სწორია

        setLoading(true); // ✅ დავიწყეთ loading

        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=${ITEMS_PER_PAGE}&_page=${page}`
            );

            const newItems = response.data as Item[];

            setItems(prev => [...prev, ...newItems]);
            setPage(prev => prev + 1);

            if (newItems.length < ITEMS_PER_PAGE) {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            )}
            onEndReached={fetchData}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                loading ? <ActivityIndicator size="large" /> : null
            }
        />
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 16,
    },
});