
import React, { Component, useContext, useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TitleContext } from '../lib/contexts';
export default function NewEdits({ navigation }) {
    const titleContext = useContext(TitleContext)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', e => {
            titleContext.updateTitle('NewEdit')
        });
        return unsubscribe;
    }, [navigation]);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    return <View><Text >Edit Screen</Text></View>



}
{/* 
//         <DateTimePicker mode="time" /></View> */}

{/* //     // <DatePicker date={date} onDateChange={setDate} />
// }
// //     const [date, setDate] = useState(new Date())
// //     const [open, setOpen] = useState(false)



// //     const buttonClickedHandler = () => { */}
//         console.log('You have been clicked a button!');
//         // do something
//     };



//     return (
//         // <View style={styles.container}>
//         //     <View >
//         //         <Text style={styles.title}>Edit kar yar</Text>
//         //         <Text style={styles.line}>Change period or touch + to create new activity</Text>
//         //     </View>
//         //     <View style={styles.btn} >
//         //         <TouchableOpacity
                    //  onPress={buttonClickedHandler}
                    // style={styles.roundButton1}>
        //             <Icon style={styles.iconBtn} name='plus' color='white' />
        //         </TouchableOpacity>
        //     </View>
        // </View>
//         <>

//             <Button title="Open" onPress={() => setOpen(true)} />
//             <DatePicker
//                 modal
//                 open={open}
//                 date={date}
//                 onConfirm={(date) => {
//                     setOpen(false)
//                     setDate(date)
//                 }}
//                 onCancel={() => {
//                     setOpen(false)
//                 }}
//             />
//         </>

//     )
// 
