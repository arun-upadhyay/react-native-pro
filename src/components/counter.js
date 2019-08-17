import React, {Component} from 'react';
import {AppRegistry, Image, ScrollView, Button, Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Counter extends Component {

    state = {
        counter: 0
    }
    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decreaseCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <ScrollView>
                <TouchableOpacity>
                    <Text onPress={this.increaseCounter} style={{flexDirection: 'row', width: 200}}> Increase</Text>
                </TouchableOpacity>
                <Text style={{flexDirection: 'row', width: 100}}> {this.state.counter} </Text>
                <TouchableOpacity>
                    <Text onPress={this.decreaseCounter} style={{flexDirection: 'row', width: 200}}> Decrease</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
