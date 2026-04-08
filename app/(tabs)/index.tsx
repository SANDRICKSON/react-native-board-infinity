import React from 'react';
import {Button, FlexAlignType, StyleSheet, Text, View} from 'react-native';
import {Space_Separator} from "json5/lib/unicode";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: navy;
`

const HelloText = styled.Text`
   font-size: 20px;
    color:black;
    margin: 10px;
`

export default function Counter() {



    return (
        <Container>
            <HelloText>Hello World</HelloText>

        </Container>
    );
}


