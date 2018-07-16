/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const instructions =
  'Press Ctrl+R to reload,\n' +
  'Shift+F10 or shake for dev menu';

export default class App extends Component<{}> {
  constructor() {
    super();
    
    this.state = {
      text: ''
    }
  }

  onChangeText = (text: string) => {
    this.setState({text});
  }

  onPress = () => {
    console.log("Send text" + this.state.text);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
          <Text>Main content goes here</Text>
        </View>
        <View style={{height: 44}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 5, height: 44}}>
              <TextInput text={this.state.text}
                         style={{flex: 1}}
                         onChangeText={this.onChangeText}/>
            </View>
            <TouchableOpacity onPress={this.onPress}
                              style={{flex: 2, height: 44, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
