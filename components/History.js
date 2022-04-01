import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function History( { route}) {

    const { data } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.box}></View>
            <View style={styles.box}>
            <Text style={{ marginTop: 10, marginBottom: 10}}>History</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
               </View>
               <View style={styles.box}>
               </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    //For adjusting the layout.
    box : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

});

