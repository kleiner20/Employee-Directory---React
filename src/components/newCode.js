

import React, {Component} from 'react';
import "./styles.css";
import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';

export default class App extends Component {
  state={
    colors:['green', 'blue', 'yellow', 'red'],
    buttonColor:'blue'
  };

  changeColor(){
    const colorArray= this.state.colors;
    var currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.setState({buttonColor:currentColor});
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
              style={{backgroundColor:this.state.buttonColor, padding: 15}}
              onPress={()=>this.changeColor()}
                >
            <Text style={styles.text}>Change Color!</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    color:'white'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});