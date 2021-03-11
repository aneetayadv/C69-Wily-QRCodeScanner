import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SearchScreen from './screens/SearchScreen';
import TransactionScreen from './screens/BookTransactionScreen';

export default class App extends Component{
 render(){
   return(
     <View style={{flex:1}}>
       <AppContainer/>
     </View>
     
   )
 }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:TransactionScreen},
  Search : {screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator);