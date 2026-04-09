import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
}

const FetchExample: React.FC = () => {
    const [data, setData] = useState<Post[] | null>(null); // ✅ აქ არის შეცდომის გამოსწორება
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
                throw new Error("Could not find posts.");
            }
            const jsonData: Post[] = await response.json(); // ✅ JSON არის მასივი
            setData(jsonData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data} // ✅ ახლა data ნამდვილად არის Post[]
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    item: { marginBottom: 20 },
    title: { fontSize: 18, fontWeight: "bold" },
    loader: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default FetchExample;