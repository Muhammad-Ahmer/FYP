import React, { Component, useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Button, FlatList } from 'react-native';
// import { Picker } from '@react-native-picker/picker'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { TitleContext } from '../lib/contexts';

export default function Running({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('Running')
        });
        return unsubscribe;
    }, [navigation]);

    const [state, setState] = useState(false);


    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        navigation.navigate("AddNewType");
        setState(!state);

    };

    const DATA = [
        {
            id: '1',
            icon: 'walking',
            title: 'Walk',
            color: '#4db8db'

        },
        {
            id: '2',
            icon: 'briefcase',
            title: 'Work',
            color: '#e38017'

        },
        {
            id: '3',
            icon: 'pencil-alt',
            title: 'Study',
            color: '#968c59'

        },
        {
            id: '4',
            icon: 'volleyball-ball',
            title: 'Sports',
            color: '#f59a2c'
        },
        {
            id: '5',
            icon: 'theater-masks',
            title: 'Sleep',
            color: '#a83503'
        },
        {
            id: '6',
            icon: 'truck-moving',
            title: 'Transport',
            color: '#ed287e'
        },
        {
            id: '7',
            icon: 'utensils',
            title: 'Eat',
            color: '#5b8703'
        },
        {
            id: '8',
            icon: 'book',
            title: 'Read',
            color: '#6b6e3f'
        },
        {
            id: '9',
            icon: 'shopping-cart',
            title: 'Shop',
            color: '#7c9985'
        },
        {
            id: '10',
            icon: 'dice',
            title: 'Entertainment',
            color: '#12c6c9'
        },
        {
            id: '11',
            icon: 'home',
            title: 'Housework',
            color: '#034a19'
        },

    ];

    //   hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    const numColumns = 4

    const adjustLastRow = (DATA, numColumns) => {
        const completeRows = Math.floor(DATA.length / numColumns)
        let elementInLastRow = DATA.length - (completeRows * numColumns)
        while (elementInLastRow !== 0 && elementInLastRow !== numColumns) {
            DATA.push({ id: 'blank', title: 'blank', empty: true })
            elementInLastRow++
        }
        return DATA
    }
    const Item = ({ title, color, icon, empty }) => {
        if (empty) {
            return (
                <View style={styles.container}>
                    <View style={styles.blank}>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name={icon} color={color} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            )
        }
    };
    const renderItem = ({ item }) => {
        return (
            <Item title={item.title} icon={item.icon} color={item.color} empty={item.empty} />
        )
    };
    //   hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh


    return (
        <View style={[styles.container, state ? { backgroundColor: 'rgba(10,10,10,0.05)' } : '']}>

            <Modal
                animationType={"fade"}
                transparent={true}
                visible={state}
                onRequestClose={() => { console.log("Modal has been closed.") }}>
                {/*All views of Modal*/}
                <View style={styles.modal}>
                    <Text style={styles.inputtt}>Select Type</Text>
                    <View >
                        <FlatList
                            data={adjustLastRow(DATA, numColumns)}
                            renderItem={renderItem}
                            numColumns={numColumns}
                            keyExtractor={item => item.id}
                        />
                    </View>


                    <View style={styles.modalFunctions}>
                        <TouchableOpacity onPress={buttonClickedHandler}>
                            <Text style={styles.modalFunctionsText} >New Type</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setState(!state) }}>
                            <Text style={styles.modalFunctionsText}>Cancle</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </Modal>

            <TouchableOpacity style={styles.selectType} onPress={() => { setState(!state) }}>
                <View><Text style={styles.Textt}>Type</Text>
                    <Text style={styles.inputt}>Select Type</Text></View>
                <View style={[styles.triangle, styles.arrowDownRight]} ></View>
            </TouchableOpacity>

            <Text style={styles.Text}>Comment</Text>
            <TextInput
                style={styles.input}
                placeholder="Comment"
                value='Comment'
            />
            <Text style={styles.Text}>Started on</Text>

            <View style={styles.borderr}>
                <TextInput
                    style={styles.picker}
                    placeholder="Comment"
                    value='Aug 05'
                />
                <TextInput
                    style={styles.picker}
                    placeholder="Comment"
                    value='06:12 pm'
                />
            </View>

            <View style={styles.backgroundColo}>
                <View>
                    <Text style={styles.secondlastrow}>Intervals</Text>
                    <Text style={styles.lastrow}>Time tracked: 00:00</Text>
                </View>
                <View><Icon style={styles.content} name='plus' color='white' /></View>
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
    selectType: {
        flexDirection: 'row',
        borderBottomWidth: 0.4,
        borderColor: '#466545',
        marginLeft: 10,
        marginRight: 10,
    },
    inputt: {
        // flex: 1,
        height: 35,
        fontSize: 18,
    },
    inputtt: {
        // flex: 1,

        height: 35,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 15,
    },
    Textt: {

        color: '#808080'
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
    modal: {

        backgroundColor: 'white',
        // height: 250,
        width: '85%',
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 270,
        marginLeft: 30,



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
        paddingRight: 15,
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
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
    },
    arrowDownRight: {

        marginTop: 48,
        marginLeft: 279.5,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 8,
        borderLeftWidth: 8,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: "black",
        borderLeftColor: 'transparent',


    },

    modalFunctions: {
        flexDirection: 'row',

        justifyContent: 'space-between',
    },
    modalFunctionsText: {
        margin: 15,

        color: 'green',
        fontWeight: "bold",
    },
    item: {
        width: 80,
        height: 80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 12,
    },
    icon: {
        paddingTop: 25,
        fontSize: 22,
    },
    title: {
        paddingBottom: 10,
        fontSize: 10,
        textAlign: 'center',
    },

});