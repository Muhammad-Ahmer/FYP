import React, { Component, useContext, useState } from 'react';
import { NativeBaseProvider, Box } from "native-base";
import { SketchPicker } from 'react-color';
import DateTimePicker from '@react-native-community/datetimepicker';

import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TitleContext } from '../lib/contexts';

import 'react-native-reanimated';


import Animated, {
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';



export default function AddNewType({ navigation }) {

    const color = useSharedValue('#ff0000');
    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: color.value,
    }));

    const onSelectColor = ({ hex }) => {
        let newHex = JSON.stringify(hex);
        console.log('hex :', newHex);
        color.value = hex;
    };


    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('AddNewType')
        });
        return unsubscribe;
    }, [navigation]);


    const [state, setState] = useState(false);
    const [Iconstate, setIconState] = useState('circle');
    const [CheckBoxValue, setCheckBoxValue] = useState(false);

    const IconClicked = (item) => {

        setIconState(item.icon);

        console.log(item.icon);

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
        {
            id: '12',
            icon: 'walking',
            title: 'Walk',
            color: '#4db8db'

        },
        {
            id: '13',
            icon: 'briefcase',
            title: 'Work',
            color: '#e38017'

        },
        {
            id: '14',
            icon: 'pencil-alt',
            title: 'Study',
            color: '#968c59'

        },
        {
            id: '15',
            icon: 'volleyball-ball',
            title: 'Sports',
            color: '#f59a2c'
        },
        {
            id: '16',
            icon: 'theater-masks',
            title: 'Sleep',
            color: '#a83503'
        },
        {
            id: '17',
            icon: 'truck-moving',
            title: 'Transport',
            color: '#ed287e'
        },
        {
            id: '18',
            icon: 'utensils',
            title: 'Eat',
            color: '#5b8703'
        },
        {
            id: '19',
            icon: 'book',
            title: 'Read',
            color: '#6b6e3f'
        },
        {
            id: '20',
            icon: 'shopping-cart',
            title: 'Shop',
            color: '#7c9985'
        },
        {
            id: '21',
            icon: 'dice',
            title: 'Entertainment',
            color: '#12c6c9'
        },
        {
            id: '22',
            icon: 'home',
            title: 'Housework',
            color: '#034a19'
        },
        {
            id: '23',
            icon: 'walking',
            title: 'Walk',
            color: '#4db8db'

        },
        {
            id: '24',
            icon: 'briefcase',
            title: 'Work',
            color: '#e38017'

        },
        {
            id: '25',
            icon: 'pencil-alt',
            title: 'Study',
            color: '#968c59'

        },
        {
            id: '26',
            icon: 'volleyball-ball',
            title: 'Sports',
            color: '#f59a2c'
        },
        {
            id: '27',
            icon: 'theater-masks',
            title: 'Sleep',
            color: '#a83503'
        },
        {
            id: '28',
            icon: 'truck-moving',
            title: 'Transport',
            color: '#ed287e'
        },
        {
            id: '29',
            icon: 'walking',
            title: 'Walk',
            color: '#4db8db'

        },
        {
            id: '30',
            icon: 'briefcase',
            title: 'Work',
            color: '#e38017'

        },
        {
            id: '31',
            icon: 'pencil-alt',
            title: 'Study',
            color: '#968c59'

        },
        {
            id: '32',
            icon: 'volleyball-ball',
            title: 'Sports',
            color: '#f59a2c'
        },
        {
            id: '33',
            icon: 'theater-masks',
            title: 'Sleep',
            color: '#a83503'
        },
        {
            id: '34',
            icon: 'truck-moving',
            title: 'Transport',
            color: '#ed287e'
        },
        {
            id: '35',
            icon: 'utensils',
            title: 'Eat',
            color: '#5b8703'
        },
        {
            id: '36',
            icon: 'book',
            title: 'Read',
            color: '#6b6e3f'
        },
        {
            id: '37',
            icon: 'shopping-cart',
            title: 'Shop',
            color: '#7c9985'
        },
        {
            id: '38',
            icon: 'dice',
            title: 'Entertainment',
            color: '#12c6c9'
        },
        {
            id: '39',
            icon: 'home',
            title: 'Housework',
            color: '#034a19'
        },
        {
            id: '40',
            icon: 'walking',
            title: 'Walk',
            color: '#4db8db'

        },
        {
            id: '41',
            icon: 'briefcase',
            title: 'Work',
            color: '#e38017'

        },
        {
            id: '42',
            icon: 'pencil-alt',
            title: 'Study',
            color: '#968c59'

        },
        {
            id: '43',
            icon: 'volleyball-ball',
            title: 'Sports',
            color: '#f59a2c'
        },
        {
            id: '44',
            icon: 'theater-masks',
            title: 'Sleep',
            color: '#a83503'
        },
        {
            id: '45',
            icon: 'truck-moving',
            title: 'Transport',
            color: '#ed287e'
        },
        {
            id: '46',
            icon: 'utensils',
            title: 'Eat',
            color: '#5b8703'
        },
        {
            id: '47',
            icon: 'book',
            title: 'Read',
            color: '#6b6e3f'
        },
        {
            id: '48',
            icon: 'shopping-cart',
            title: 'Shop',
            color: '#7c9985'
        },
        {
            id: '49',
            icon: 'dice',
            title: 'Entertainment',
            color: '#12c6c9'
        },
        {
            id: '50',
            icon: 'home',
            title: 'Housework',
            color: '#034a19'
        },
        {
            id: '51',
            icon: 'walking',
            title: 'Walk',
            color: '#4db8db'

        },
        {
            id: '52',
            icon: 'briefcase',
            title: 'Work',
            color: '#e38017'

        },
        {
            id: '53',
            icon: 'pencil-alt',
            title: 'Study',
            color: '#968c59'

        },
        {
            id: '54',
            icon: 'volleyball-ball',
            title: 'Sports',
            color: '#f59a2c'
        },
        {
            id: '55',
            icon: 'theater-masks',
            title: 'Sleep',
            color: '#a83503'
        },
        {
            id: '56',
            icon: 'truck-moving',
            title: 'Transport',
            color: '#ed287e'
        },

    ];


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
            <TouchableOpacity onPress={() => IconClicked(item)} >
                <Item title={item.title} icon={item.icon} color={item.color} empty={item.empty} />

            </TouchableOpacity>
        )
    };
    //   hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh


    return (



        <View style={[styles.container, state ? { backgroundColor: 'rgba(10,10,10,0.05)' } : '']}>

            <Modal propagateSwipe
                animationType={"fade"}
                transparent={true}
                visible={state}
                onRequestClose={() => { console.log("Modal has been closed.") }}>
                {/*All views of Modal*/}
                <View style={styles.modal}>
                    <Text style={styles.inputtt}>Select Icon</Text>

                    {/* contentContainerStyle={styles.contentContainer} */}

                    <View style={styles.width}>
                        <SafeAreaView style={{ flex: 1 }}>


                            <FlatList
                                data={adjustLastRow(DATA, numColumns)}
                                renderItem={renderItem}
                                numColumns={numColumns}
                                // extraData={index}

                                keyExtractor={item => item.id}
                            />

                        </SafeAreaView>

                    </View>

                    <View style={styles.modalFunctions}>
                        <TouchableOpacity onPress={() => navigation.navigate("AddNewType")}>
                            <Text style={styles.modalFunctionsText} >Color</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setState(!state) }}>
                            <Text style={styles.modalFunctionsText}>Cancle</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </Modal>


            <View style={styles.alingnment} >

                <Checkbox
                    value={CheckBoxValue}
                    onValueChange={() => setCheckBoxValue(!CheckBoxValue)}
                    style={styles.checkbox}
                />

                <Text style={styles.inputt}>Group</Text></View>

            {/* Enter name  //////////////////////////////////////////////////////////////////////*/}

            <Text style={styles.Text}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                placeholderTextColor="#000"
            // value='Enter name'
            />
            <View style={[styles.triangle, styles.arrowDownRight]} ></View>

            {/* color  //////////////////////////////////////////////////////////////////////*/}
            <View style={styles.borderr}>
                <TouchableOpacity >
                    <View>
                        <Text style={styles.Text}>Color</Text>


                        <Icon style={styles.picker2} name={Iconstate} color='red' />


                        <View style={[styles.triangle, styles.arrowDownRightPicker1]} ></View>
                    </View>
                </TouchableOpacity>

                {/* icon //////////////////////////////////////////////////////////////////////*/}
                <TouchableOpacity style={styles.selectType} onPress={() => { setState(!state) }}>
                    <View>
                        <Text style={styles.Textt}>Icon</Text>
                        <Icon style={styles.picker2} name={Iconstate} color='red' />
                        <View style={[styles.triangle, styles.arrowDownRightPicker2]} ></View>
                    </View>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.backgroundColo}>
                <View>
                    <Text style={styles.secondlastrow}>Intervals</Text>
                    <Text style={styles.lastrow}>Time tracked: 00:00</Text>
                </View>
                <View><Icon style={styles.content} name='plus' color='white' /></View>
            </View> */}


            {/*  />
            
           */}




            <Animated.View style={[styles.contain, animatedStyle]}>
                <Example1 color={color} onSelectColor={onSelectColor} />
                <Example2 color={color} onSelectColor={onSelectColor} />
                <Example3 color={color} onSelectColor={onSelectColor} />
                <Example4 color={color} onSelectColor={onSelectColor} />
            </Animated.View>
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
        marginTop: -5,
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
        marginLeft: 29,
        marginTop: 15,
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
        color: '#808080',
        width: 195,
    },
    Text: {
        marginLeft: 10,
        color: '#808080',
        width: 195,
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
        borderColor: '#ffffff',
        marginTop: 82.5,
        marginLeft: 30,
        justifyContent: 'center',



    },

    picker1: {
        fontSize: 25,
        marginLeft: 10,
        paddingLeft: 5,
        paddingTop: 5,
        marginTop: 0,
        borderBottomWidth: 0.5,
        borderColor: '#466545',


        height: 42,
        width: 190,

    },
    picker2: {

        fontSize: 25,
        marginTop: 0,
        borderBottomWidth: 0.5,
        borderColor: '#466545',
        paddingLeft: 5,
        paddingTop: 5,
        marginRight: 25,
        height: 42,
        width: 190,

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

        marginTop: -8,
        marginLeft: 393,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 8,
        borderLeftWidth: 8,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: "black",
        borderLeftColor: 'transparent',
    },
    arrowDownRightPicker1: {

        marginTop: -8.5,
        marginLeft: 195,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 8,
        borderLeftWidth: 8,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: "black",
        borderLeftColor: 'transparent',
    },
    arrowDownRightPicker2: {

        marginTop: -8.5,
        marginLeft: 185,
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
        width: 81,
        height: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 6,
    },
    icon: {
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 20,
    },
    title: {
        paddingBottom: 10,
        fontSize: 10,
        textAlign: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        marginTop: 2,
    },
    label: {
        margin: 8,
    },
    alingnment: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    width: {
        height: 600,
        borderTopWidth: 1,
        borderTopColor: "grey",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    },
    contain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 40,
        width: '100%',
        maxWidth: 500,
        margin: 'auto',
    },


});





































































































































































































































