import React, { Component, useContext } from 'react';
import { View, Text,StyleSheet } from 'react-native';
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
            <Text style={styles.title}>Nothing tracked for selected period</Text>
            <Text style={styles.line}>Change period or touch + to create new activity</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
     
      fontSize: 20,
      textAlign:'center',
      paddingTop:15,
     
    },
    line: {
    
        fontSize: 15,
        textAlign:'center',
        paddingTop:2,
      },
  });