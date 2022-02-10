import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { TitleContext } from './lib/contexts';

import AppContainer from './lib/router';
const AppIndex = AppContainer

export default function app() {

    const [name, setName]= useState();

    const updateName = (nameprop)=> {
        setName(nameprop);
    }
    ///////////////////////////////////////////
    const [title, setTitle] = useState();

    const updateTitle = (title) => {
        setTitle(title);
        // test
    }
    const obj = { updateTitle:updateTitle, updateName};
    ///////////////////////////////////////////

    return (
        <TitleContext.Provider value={obj}>
            <View style={{ flex: 1 }} >
                <StatusBar
                    backgroundColor='#084b9e'
                />
                <View style={styles.header}>
                    <Icon name='align-justify' size={16} color='white' />
                    <Text>{title}</Text>
                    <Text>{name}</Text>
                    <Icon name='search' size={16} color='white' />
                </View>
                <AppIndex/>
            </View>
        </TitleContext.Provider>
    )

}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0096ed',
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 18,
    }
});