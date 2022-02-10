import React, { Component, useContext } from 'react';
import { View, Text } from 'react-native';
import { TitleContext } from '../lib/contexts';
export default function EditScreen({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('Edits')
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View>
            <Text>This is Edit Screen</Text>
        </View>
    )
}

