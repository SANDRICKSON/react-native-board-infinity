import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

// Optional: styled-components-ს შეუძლია background + padding
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: navy;
    padding: 16px;
`;

export default function Counter() {
    return (
        // ამ შემთხვევაში შეგიძლია გამოიყენო უბრალოდ styled-components
        <Container>
            {/* აქ შეგიძლია HelloText ან სხვა JSX */}
        </Container>

        // ან მხოლოდ StyleSheet
        /*
        <View style={[styles1['bg-blue-500'], styles1['p-4']]}></View>
        */
    );
}

const styles1 = StyleSheet.create({
    "bg-blue-500": {
        backgroundColor: "red", // შენ შეგიძლია შეცვალო აქ navy ან სხვა ფერი
    },
    "p-4": {
        padding: 16,
    },
});