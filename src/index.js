import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { TitleContext } from './lib/contexts';

import AppContainer from './lib/router';
const AppIndex = AppContainer

export default function app() {


    ///////////////////////////////////////////
    const [title, setTitle] = useState();

    const updateTitle = (title) => {
        setTitle(title);
        // test
    }
    const obj = { updateTitle:updateTitle};
    ///////////////////////////////////////////

                    const Headerupdate = ({titl}) => {
                    if(titl!=='Edits'){
                        return( <View style={styles.header}>
                            <Text style={styles.content}>{titl}</Text>
                        </View>)
                   
}
                    else if(titl=='Edits'){
                        return( <View style={styles.header}>
                           <Icon style={styles.content} name='align-justify'  color='white' />
                            <Text style={styles.content}>{titl}</Text>
                           <Icon style={styles.content} name='search'  color='white' />  
                           </View>)
                            }
}


    return (
        <TitleContext.Provider value={obj}>
            <View style={{ flex: 1 }} >
                <StatusBar backgroundColor='#084b9e'/>
                <Headerupdate titl={title}/>
                <AppIndex/>
            </View>
        </TitleContext.Provider>
    )

}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0096ed',
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 18,
       
    },
    content:{ fontSize:20,
        color:'white',
        paddingLeft:2,
        paddingRight:2,
    }
    
});