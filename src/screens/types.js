import React, { Component, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {  View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import { TitleContext } from '../lib/contexts';
export default function TypesScreen({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('Types')
        });
        return unsubscribe;
    }, [navigation]);

    const DATA = [
        {
          id: '1',
          icon:'walking',
          title: 'Walk',
          color:'#4db8db'
          
        },
        {
          id: '2',
          icon:'briefcase',
          title: 'Work',
          color:'#e38017'
          
        },
        {
          id: '3',
          icon:'pencil-alt',
          title: 'Study',
          color:'#968c59'
          
        },
        {
          id: '4',
          icon:'volleyball-ball',
          title: 'Sports',
          color:'#f59a2c'
        },
        {
          id: '5',
          icon:'theater-masks',
          title: 'Sleep',
          color:'#a83503'
        },
        {
          id: '6',
          icon:'truck-moving',
          title: 'Transport',
          color:'#ed287e'
        },
        {
          id: '7',
          icon:'utensils',
          title: 'Eat',
          color:'#5b8703'
        },
        {
          id: '8',
          icon:'book',
          title: 'Read',
          color:'#6b6e3f'
        },
        {
          id: '9',
          icon:'shopping-cart',
          title: 'Shop',
          color:'#7c9985'
        },
        {
          id: '10',
          icon:'dice',
          title: 'Entertainment',
          color:'#12c6c9'
        },
        {
          id: '11',
          icon:'home',
          title: 'Housework',
          color:'#034a19'
        },
      ];


  const Item = ({ title, color,icon}) => {
    return(
        <View style={styles.container}>
        <View style={styles.iconbox}>
        <Icon style={styles.icon} name={icon}  color={color} />
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.title}>{title}</Text>
        </View>
        </View>
    )
};
  const renderItem = ({ item }) => {
      return(
        <Item title={item.title}  icon={item.icon} color={item.color} />
      )
    };

  return (
    // <SafeAreaView >
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor:'blue',
     flexDirection: 'row',
     borderBottomColor:'gray',
     borderBottomWidth:0.3,
  },
  iconbox: {
      
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
     marginLeft: 0,
    // backgroundColor:'pink'
  },
  titlebox: {
    width: 370,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',

     
    // backgroundColor:'red',
    
  },
  icon:{ 
  fontSize:20,
  paddingLeft:20,
alignContent:'center',
  },
  title: {
    marginLeft:5,
    fontSize: 17,
   
  },
});

