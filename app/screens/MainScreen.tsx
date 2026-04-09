import { useAppContext } from "@/app/context/AppContext";
import { Button, Text, TextInput, View } from "react-native";
import React from "react";

const MainScreen = () => {
    const { user, setUser } = useAppContext();
    const [name, setName] = React.useState<string>("");

    const updateUser = () => {
        setUser({
            id: Date.now(),
            name: name
        });
    };

    return (
        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
            <Text>{user ? user?.name : 'User not logged in'}</Text>

            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
                style={{ borderWidth: 1, marginVertical: 10 }}
            />

            <Button title="Update User" onPress={updateUser} />
        </View>
    );
};

export default MainScreen;