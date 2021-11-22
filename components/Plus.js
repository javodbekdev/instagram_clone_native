import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
const Plus = () => {
    return (
        <View style={styles.header}>
            <View style={styles.bar}>
                <Text style={styles.font}>Activity</Text>
            </View>
            <View style={styles.box}>
                <AntDesign name="heart" size={35} color="red" />
                <Text style={styles.tixt}>Your liked John</Text>
            </View>
            
        </View>
    )
}

export default Plus

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 700,
        backgroundColor: '#000'
    },
    bar: {
        width: '100%',
        height: 70,
        backgroundColor: '#000',
        marginTop: 20

    },
    tixt: {
        color: '#fff',
    },
    font: {
        color: '#fff',
        paddingTop: 18,
        paddingLeft: 10,
        fontSize: 18
    },
    box: {
        display: 'flex',
        flexDirection: 'row',

    }
});