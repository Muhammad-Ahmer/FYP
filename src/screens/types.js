import React, { Component, useContext } from 'react';
import { View, Text } from 'react-native';
import { TitleContext } from '../lib/contexts';
export default function TypesScreen({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('types')
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View>
            <Text>this is Types screen</Text>
        </View>
    )
}

