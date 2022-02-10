import React, { Component, useContext } from 'react';
import { View, Text } from 'react-native';
import Categories from '../components/Categories';
import { TitleContext } from '../lib/contexts';
export default function MoreScreen({ navigation ,route}) {

    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle(route.name+' ao g')
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View>
            <Text>{route.name}</Text>
            {/* <Categories name="xyz" title="title prop" badge="badge prop"/>*/}
        </View>
    )
}  
