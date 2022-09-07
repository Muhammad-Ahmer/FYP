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
    const obj = { updateTitle: updateTitle };
    ///////////////////////////////////////////

    const Headerupdate = ({ titl }) => {
        if (titl == 'Activities' || titl == 'Goals' || titl == 'More' || titl == 'Types') {
            return (<View style={styles.header}>
                <Text style={styles.content}>{titl}</Text>
            </View>)
        }
        else if (titl == 'Edits') {
            return (<View style={styles.header}>
                <Icon style={styles.content} name='align-justify' color='white' />
                <Text style={styles.content}>{titl}</Text>
                <Icon style={styles.content} name='search' color='white' />
            </View>)
        }

        else if (titl == 'NewEdit' || titl == 'Running' || titl == 'Paused' || titl == 'Stopped') {
            return (<View style={styles.NewHeader}>
                <Icon style={styles.Tick} name='check' color='white' />
            </View>)
        }


        else if (titl == 'NewGoals' || titl == 'NewTypes' || titl == 'AddNewType') {
            return (<View style={styles.NewHeader}>
                <Icon style={styles.cross} name='times' color='white' />
                <Icon style={styles.content} name='check' color='white' />

            </View>)
        }
        else if (titl == 'Reports' || titl == 'About' || titl == 'Syncronization' || titl == 'Settings' || titl == 'Contribute') {

            return (<View style={styles.header}>
                <Text style={styles.content}>{titl}</Text>
            </View>)

        }

        else return null;
    }

    return (
        <TitleContext.Provider value={obj}>
            <View style={{ flex: 1 }} >
                <StatusBar backgroundColor='#084b9e' />
                <Headerupdate titl={title} />
                <AppIndex />
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
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 12,

    },
    content: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
    },
    cross: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        marginLeft: 275,
    },
    Tick: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        marginLeft: 350,
    },
    NewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0096ed',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
}
);