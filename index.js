import React, {Component} from 'react';
import {AppRegistry, Image, ScrollView, Button, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Counter from "./src/components/counter";

export default class Main extends Component {

    render() {
        return (
            <Counter/>
        );
    }
}

AppRegistry.registerComponent('AwesomePro', () => Main);
