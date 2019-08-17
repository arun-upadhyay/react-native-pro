import React, {Component} from 'react';
import {AppRegistry, Image, ScrollView, Text, Button, ListView, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Layout extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.list}>
                <Text style={styles.item}>1</Text>
                <Text style={styles.item}>2</Text>
                <Text style={styles.item}>2</Text>
                <Text style={styles.item}>2</Text>
                <Text style={styles.item}>2</Text>

            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 100,
        height: 200
    }
});