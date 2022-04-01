import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';


export default function Calculator({ navigation }) {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const [result, setResult] = useState('');
    const [data, setData] = useState([]);

    const count1 = () => {
        const result = Number(text1) + Number(text2);
        setResult(result);
        let historia = text1 + ' + ' + text2 + ' = ' + result;
        setData([...data, { key: historia }]);
        setText1('');
        setText2('');
    }

    const count2 = () => {
        const result = Number(text1) - Number(text2);
        setResult(result);
        let historia = text1 + ' - ' + text2 + ' = ' + result;
        setData([...data, { key: historia }]);
        setText1('');
        setText2('');
    }


    return (
        <View style={styles.container}>
            <Text>Result: {result}</Text>
            <TextInput style={styles.input} onChangeText={text1 => setText1(text1)} value={text1} />
            <TextInput style={styles.input} onChangeText={text2 => setText2(text2)} value={text2} />
            <View style={styles.row}>
                <View style={styles.button}>
                    <Button onPress={count1} title='+' />
                </View>
                <View style={styles.button}>
                    <Button onPress={count2} title='-' />
                </View>
                <View style={styles.button}>
                    <Button onPress={() => navigation.navigate('History', { data })} title='History' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: '30%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 5,
    },

    row: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: '50%',

    },

    button: {
        marginTop: 10,
      
    }

});
