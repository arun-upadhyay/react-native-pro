import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';

export default class Note extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={{
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text> PLACE HOLDER FOR IMAGE</Text>
                </View>


                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{
                            backgroundColor: 'red',
                            flex: 1,
                            textAlignVertical: 'center',
                            textAlign: 'center'
                        }}> ICON 1</Text>
                        <Text style={{
                            backgroundColor: 'pink',
                            flex: 1,
                            textAlignVertical: 'center',
                            textAlign: 'center'
                        }}> ICON 2</Text>
                        <Text style={{
                            backgroundColor: 'green',
                            flex: 1,
                            textAlignVertical: 'center',
                            textAlign: 'center'
                        }}>ICON 3 </Text>
                    </View>


                    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={{
                            backgroundColor: 'yellow',
                            flex: 5,
                            textAlignVertical: 'center',
                            textAlign: 'center'
                        }}>
                            .
                        </Text>
                        <Text style={{
                            backgroundColor: 'lightblue',
                            textAlignVertical: 'center',
                            textAlign: 'center'
                        }}> ICON 5 </Text>
                        <Text style={{
                            backgroundColor: 'lightgreen',
                            textAlignVertical: 'center',
                            textAlign: 'center'
                        }}> ICON 6 </Text>
                    </ScrollView>

                </View>


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
