import { Component, ReactNode } from 'react';
import { Text } from 'react-native';

import { View } from 'react-native';

class HelloWorld extends Component{
  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World</Text>
      </View>
    )
  }
}

export default HelloWorld;