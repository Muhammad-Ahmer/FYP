import React, { Component, useContext } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { TitleContext } from '../lib/contexts';
export default function ActivitiesScreen({ navigation }) {
  const titleContext = useContext(TitleContext)
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', e => {
      titleContext.updateTitle('Activities')
    });
    return unsubscribe;
  }, [navigation]);

  const DATA = [
    {
      id: '1',
      title: 'Walk',
      
    },
    {
      id: '2',
      title: 'Work',
      
    },
    {
      id: '3',
      title: 'Study',
      
    },
    {
      id: '4',
      title: 'Sports',
      
    },
    {
      id: '5',
      title: 'Sleep',
      
    },
    {
      id: '6',
      title: 'Transport',
      
    },
    {
      id: '7',
      title: 'Eat',
      
    },
    {
      id: '8',
      title: 'Read',
      
    },
    {
      id: '9',
      title: 'Shop',
      
    },
    {
      id: '10',
      title: 'Entertainment',
      
    },
    {
      id: '11',
      title: 'Housework',
      
    },
  ];

  const numColumns = 4

  const adjustLastRow = (DATA, numColumns) => {
    const completeRows = Math.floor(DATA.length / numColumns)
    let elementInLastRow = DATA.length - (completeRows * numColumns)
    while (elementInLastRow !== 0 && elementInLastRow !== numColumns) {
      DATA.push({ id: 'blank', title: 'blank' , empty:true})
      elementInLastRow++
    }
    return DATA
  }


  const Item = ({ title, id,empty }) => {

  if(empty){
    return(
      <View style={styles.container}>
      <View style={styles.blank}>
     
      </View>
      </View>
    )
  }
  else{
    return(
        <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>{id}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    )
  }
};


  const renderItem = ({ item }) => {
      return(
        <Item title={item.title} id={item.id} empty={item.empty}/>
      )
    };

  return (
    // <SafeAreaView >
    <FlatList
      data={adjustLastRow(DATA, numColumns)}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={item => item.id}
    />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  item: {
    width: 80,
    height: 80,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0096ed',
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 12,


  },
  title: {
    paddingBottom: 12,
    paddingTop: 12,
    fontSize: 10,

  },
  blank: { backgroundColor: 'transparent' }
});