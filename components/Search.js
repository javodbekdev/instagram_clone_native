import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

const Search = () => {
    return (
        <View style={styles.Search}>
            <TextInput style={styles.input} placeholder="Search pradacts" >
                <EvilIcons name="search" size={24} color="black" />
            </TextInput>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    Search: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#fff',
        width: '100%',
        height: 700,
    },
    input: {
        width: 260,
        height: 40,
        borderWidth: 4,
        borderColor: '#272727',
        borderRadius: 10,
        paddingLeft: 15,
        color: '#000',
        marginTop: 20,
    },
});
