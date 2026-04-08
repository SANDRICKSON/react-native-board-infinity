import React from 'react';
import { FlexAlignType, StyleSheet, Text, View } from 'react-native';

interface Auth {
  isLoggedIn: boolean;

}

const Greeting: React.FC<Auth> = ({ isLoggedIn }) => {
  return isLoggedIn ? <Text>Welcome back!</Text> : <Text>Please sign up.</Text>
}
const Header: React.FC = () => {
  return <Text style={styles.header}>Header</Text>
}
export default function HomeScreen() {
  const items = ['Apple', 'Banana', 'Cherry'];


  return (
    <View style={styles.container}>
      <Header />
      <Text>Hello World</Text>
      {items.map((item, index) => (<Text key={index}>{item}</Text>))}
      <Greeting isLoggedIn={true} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center' as FlexAlignType,
    justifyContent: 'center',
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})