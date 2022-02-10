import React, { Component, useContext } from 'react';
import { View, Text } from 'react-native';
import { TitleContext } from '../lib/contexts';
export default function GoalsScreen({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('goals')
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View>
            <Text>this is Goals screen</Text>
        </View>
    )
}  
