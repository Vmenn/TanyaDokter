import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SplashScreen, Tutorial, Chat, Hospital, News, Category, DetailDokter, Profile, EditProfile, Login, Obat, Keranjang, DetailObat, Checkout, ChangePassword, History, Register, Register2 } from '../pages';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />
            <Tab.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
            <Tab.Screen name="Hospital" component={Hospital} options={{ headerShown: false }} />
            <Tab.Screen name="Obat" component={Obat} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (

        <Stack.Navigator initialRouteName='SplashScreen'>

            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Tutorial"
                component={Tutorial}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Register2"
                component={Register2}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Obat"
                component={Obat}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Hospital"
                component={Hospital}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="News"
                component={News}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Category"
                component={Category}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="DetailDokter"
                component={DetailDokter}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Keranjang"
                component={Keranjang}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="DetailObat"
                component={DetailObat}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Checkout"
                component={Checkout}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="History"
                component={History}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router