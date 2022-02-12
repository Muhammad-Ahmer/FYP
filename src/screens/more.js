import React, { Component, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {  View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import Categories from '../components/Categories';
import { TitleContext } from '../lib/contexts';
export default function MoreScreen({ navigation ,route}) {

    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle(route.name)
        });
        return unsubscribe;
    }, [navigation]);
    const DATA = [
        {
          id: '1',
          icon:'receipt',
          title: 'Reports',
          color:'#4db8db'
          
        },
        {
          id: '2',
          icon:'cog',
          title: 'Settings',
          color:'#e38017'
          
        },
        {
          id: '3',
          icon:'cloud',
          title: 'Synchronization',
          color:'#968c59'
          
        },
        {
          id: '4',
          icon:'question-circle',
          title: 'Help',
          color:'#f59a2c'
        },
        {
          id: '5',
          icon:'info-circle',
          title: 'About',
          color:'#a83503'
        },
        {
          id: '6',
          icon:'hand-holding-heart',
          title: 'Contribute',
          color:'#ed287e'
        },
        {
          id: '7',
          icon:'star',
          title: 'Rate',
          color:'#5b8703'
        },
      ];


  const Item = ({ title, color,icon}) => {
    return(
        <View style={styles.line}>
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
        <Item title={item.title}  icon={item.icon} color={'gray'} />
      )
    };

  return (
     <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
     flex: 1,
     backgroundColor:'white',
  },

  line: {
    flexDirection: 'row',
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
    fontSize: 20,
   
  },
});

