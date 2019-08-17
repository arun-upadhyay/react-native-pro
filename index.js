import React, {Component} from 'react';
import {AppRegistry, Image, ScrollView, Button, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Note from "./src/components/note";
import Layout from "./src/components/layout";

export default class Main extends Component {

    render() {
        return (
            <Note/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },

});
AppRegistry.registerComponent('AwesomePro', () => Main);
