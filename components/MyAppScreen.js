import * as React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';  
import Home from './Home';
import Search from './Search';
import Like from './Like';
import Plus from './Plus';
import Myclon from './Myclon';

const Tab = createBottomTabNavigator();

function MyAppScreen() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: () => {
            if (route.name === "Home") {
                return <Ionicons name="home-sharp" size={24} color="black" />;
            } else if (route.name === "Search") {
                return <Ionicons name="search" size={24} color="black" />;
            } else if (route.name === "Plus") {
                return <FontAwesome name="plus-square-o" size={24} color="black" />;
            }else if (route.name === "Like") {
                return <AntDesign name="hearto" size={24} color="black" />;
            }else if (route.name === "Clon") {
                return <Image
                style={{width: 30, height: 30, borderRadius: 50,marginTop: 5}}
                source={require('../image/photo.jpg')}
                />;
            }
            },
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Plus" component={Like} />
        <Tab.Screen name="Like" component={Plus} />
        <Tab.Screen name="Clon" component={Myclon} />
    </Tab.Navigator>
    );
}
export default MyAppScreen