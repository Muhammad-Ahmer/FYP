import React, { Component, useContext } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { TitleContext } from '../lib/contexts';
export default function GoalsScreen({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('Goals')
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View>
            <Text style={styles.title}>No goals</Text>
            <Text style={styles.line}>Click + to add new goals</Text>
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