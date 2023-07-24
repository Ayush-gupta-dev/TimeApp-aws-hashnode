import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stats from '../screens/Stats'
import Todo from '../screens/Todo'
import Stopwatch from '../screens/stopwatch/Stopwatch';
import Table from '../screens/Table'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
// import Mainstopwatch from '../screens/Mainstopwatch';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: '#858EA9',
            tabBarActiveTintColor: '#fff',

            tabBarStyle: { backgroundColor: '#051C37', height: 60, margin: 0, padding: 0 },
            tabBarItemStyle: { borderRadius: 100, height: 50, marginHorizontal: 20, marginVertical: 5 },

            tabBarActiveBackgroundColor: '#0075FF',
            // tabBarInactiveBackgroundColor:"#D9D9D9",
            headerStyle: { backgroundColor: '#051C37' },
            headerTintColor: '#fff',



        }}>

            <Tab.Screen name="Stopwatch" component={Stopwatch}
                options={{
                    tabBarIcon: ({ focused }, color, size) => (
                        <Entypo name="stopwatch" size={28} color={color} style={{ color: focused ? '#fff' : '#858EA9', fontSize: focused ? 30 : 28 }}></Entypo>
                    )
                }} />
            <Tab.Screen name="Todo" component={Todo}
                options={{
                    tabBarIcon: ({ focused }, color, size) => (
                        <Feather name="check-circle" size={28} color={color} style={{ color: focused ? '#fff' : '#858EA9', fontSize: focused ? 30 : 28 }}></Feather>
                    )
                }}
            />
            <Tab.Screen name="Table" component={Table}
                options={{
                    title: 'Today-Table',
                    tabBarIcon: ({ focused }, color, size) => (
                        <AntDesign name="table" size={28} color={color} style={{ color: focused ? '#fff' : '#858EA9', fontSize: focused ? 30 : 28 }}></AntDesign>
                    )
                }}
            />

            <Tab.Screen name="Stats" component={Stats}
                options={{
                    title: 'Statistics',
                    tabBarIcon: ({ focused }, color, size) => (

                        <Octicons name="graph" style={{ color: focused ? '#fff' : '#858EA9', fontSize: focused ? 30 : 28 }}></Octicons>

                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})