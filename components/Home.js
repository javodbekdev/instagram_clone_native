import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';  
import styled from 'styled-components/native';

const NavbarView = styled.View`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding-left: 20px;
    padding-right: 20px;
`

const LogoText = styled.Text`
    color: #fff;
    font-size: 20px;
`
const Home = () => {
    return (
        <View style={styles.container}>
            <NavbarView>
                <LogoText>Instagram</LogoText>
                <MaterialCommunityIcons name="telegram" size={35} color="white" />
            </NavbarView>
            <ScrollView>
                <View style={styles.story}>
                    <Image style={styles.storyImg} source={require('../image/photo1.jpg')} />
                    <Text style={styles.storyText}>Your story</Text>
                </View>
                <View style={styles.users}>
                    <View style={styles.box1}>
                        <View style={styles.box2}>
                            <Image style={styles.profilImage} source={{uri: "https://st.rolld.ru/i/thumbnails/jony-orel.jpeg"}} />
                            <Text style={styles.jonyname}>Jony_Music</Text>
                        </View>
                        <Entypo style={styles.endIcon} name="dots-three-vertical" size={22} color="white" />
                    </View>
                    <View style={styles.page}>
                        <Image style={styles.JonyImage} source={{uri: 'https://i.pinimg.com/736x/eb/71/0d/eb710d9375cdda1acd43cb59717dea50.jpg'}}/>
                        <View style={styles.footer}>
                            <View style={styles.liked}>
                                <View style={styles.icons}>
                                    <Entypo style={styles.econci} name="heart-outlined" size={30} color="white" />
                                    <Feather style={styles.econci} name="message-circle" size={28} color="white" />
                                    <FontAwesome5 style={styles.econci} name="telegram-plane" size={28} color="white" />
                                </View>
                                <View style={styles.bookmark}>
                                    <Feather name="bookmark" size={28} color="white" />
                                </View>
                            </View>
                            <View style={styles.seperlike}>
                                <Image style={styles.javohirImg} source={require('../image/photo2.jpg')} />
                                <Text style={styles.janText}>Liked by javoxir_jan and 10 others</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        marginTop: 25,
    },
    story: {
        width: '100%',
        height: 120,
    },
    storyImg: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 15,
        marginTop: 8,
        borderWidth: 3,
        borderColor: '#fff'
    },
    storyText: {
        position: 'absolute',
        top: 85,
        left: 15,
        color: '#fff',
        fontSize: 13,
    },
    users: {
        width: '100%',
        height: 700,
        marginTop: 2,
    },
    box1: {
        width: '100%',
        height: 65,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    profilImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    box2: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 0,
    },
    jonyname: {
        color: '#fff',
        fontSize: 14,
        paddingLeft: 20,
    },
    endIcon: {
        marginRight: 10,
    },
    JonyImage: {
        width: '100%',
        height: 500,
    },
    page: {
        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        height: 500,
        
    },
    footer: {
        width: '100%',
        height: 110,
        backgroundColor: '#000',
        paddingTop: 20,
    },
    liked: {
        width: '100%',
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        
    },
    icons: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
    },
    econci: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    seperlike: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 12,
    },
    javohirImg: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    janText: {
        color: '#fff',
        fontSize: 14,
        paddingLeft: 5,
    }
});