import React, { Component, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import { TitleContext } from '../lib/contexts';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
export default function GoalsScreen({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('Goals')
        });
        return unsubscribe;
    }, [navigation]);

    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
      };





    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title}>No goals</Text>
            <Text style={styles.line}>Click + to add new goals</Text>
        </View>
         <View style={styles.btn} >
         <TouchableOpacity
           onPress={buttonClickedHandler}
           style={styles.roundButton1}>
           <Icon style={styles.iconBtn} name='plus' color='white' />
         </TouchableOpacity></View>
         </View>
    )
}  

const styles = StyleSheet.create({

    container:{flex:1,
    backgroundColor:'white'},
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
      btn: { 
        padding:20,
        position: 'absolute', 
        top: 635, 
        left: 325, 
        right: 0, 
        bottom: 0,
         justifyContent: 'center',
         alignItems: 'center',
     },
     roundButton1: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
      borderRadius: 100,
      backgroundColor: '#0096ed',
    },
    iconBtn:{fontSize:15,
    },
  });