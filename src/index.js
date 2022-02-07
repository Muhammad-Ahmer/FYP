import React, {Component} from 'react';  
import {StyleSheet, Text, View,StatusBar} from 'react-native';  

import Icon from 'react-native-vector-icons/FontAwesome5';  
  
import AppContainer from './lib/router';  
const AppIndex = AppContainer 
  
export default class App extends Component{  
    
    render(){  
        return(  
            <View style={{flex:1}} >  
                <StatusBar  
                    backgroundColor='#084b9e'  
                    
                />  
                
                <View style={styles.header}> 
                    
                    <Icon name='align-justify' size={16} color='white'/>  
                    <Text>Ahmer</Text>
                    <Icon name='search' size={16} color='white'/>  
                </View>  
                <AppIndex/>  
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    wrapper: {  
        flex: 1,  
    },  
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor: '#0096ed',  
        paddingHorizontal: 18,  
        paddingTop: 18,  
        paddingBottom: 18, 
    }  
});  