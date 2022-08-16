import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TitleContext } from '../lib/contexts';
export default function Stopped({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('Stopped')
        });
        return unsubscribe;
    }, [navigation]);


    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
    };


    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Type</Text>
            <TextInput
                style={styles.input}
                placeholder="Select Type"
                value='Select Type'
            />
            <Text style={styles.Text}>Comment</Text>
            <TextInput
                style={styles.input}
                placeholder="Comment"
                value='Comment'
            />


            <View style={styles.backgroundColo}>
                <View>
                    <Text style={styles.secondlastrow}>Intervals</Text>
                    <Text style={styles.lastrow}>Time tracked: 00:00</Text>
                </View>
                <View><Icon style={styles.content} name='plus' color='white' /></View>

            </View>


            <View style={styles.backgroundCol}>
                <View>
                    <Text style={styles.date}>Aug 15, 2022</Text>
                    <Text style={styles.time}>04:39 pm - 04:39 pm</Text>
                </View>
                <View><Text style={styles.timer}>00:00</Text></View>

            </View>



        </View >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        borderBottomWidth: 0.4,
        borderColor: '#466545',
        marginLeft: 10,
        marginRight: 10,
        height: 42,
        fontSize: 18,
    },
    Text: {
        marginLeft: 10,
        color: '#808080'
    },
    secondlastrow: {
        marginLeft: 10,
        color: 'white',
        fontSize: 20,
    },
    lastrow: {
        marginLeft: 10,
        color: 'white',
        fontSize: 12,
    },

    picker: {
        borderBottomWidth: 0.5,
        borderColor: '#466545',
        marginLeft: 10,
        marginRight: 10,
        height: 42,
        fontSize: 18,
    },
    borderr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        fontSize: 20,
        color: 'white',
        paddingTop: 15,
        paddingRight: 12,
    },

    date: {
        marginLeft: 10,
        color: 'black',
        fontSize: 12,
    },
    time: {
        marginLeft: 10,
        color: 'black',
        fontSize: 18,
    },


    timer: {
        fontSize: 20,
        color: 'black',
        paddingTop: 7.5,
        paddingRight: 5,
    },

    backgroundColo: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#0096ed',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
        padding: 5,
        height: 60,
    },

    backgroundCol: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        height: 60,
    }

});