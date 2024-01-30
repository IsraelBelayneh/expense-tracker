import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AddExpense from './Screens/AddExpense';
import Walet from './Screens/Walet';
import Statistics from './Screens/Statistics';
import Profile from './Screens/Profile';
import Setting from './Screens/Setting';
import TransactionDetail from './Components/TransactionDetail';
import Currency from './Screens/Currency';

const Stack = createStackNavigator();
const App = () => {
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{tabBarStyle: {height: 80, borderTopWidth: 0}}}>
        <Tab.Screen
          name="main"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'Main',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo name="home" size={22} color="#FF6E37" />
              ) : (
                <Entypo name="home" size={22} color="silver" />
              ),
          }}
        />

        <Tab.Screen
          name="walet"
          component={Walet}
          options={{
            headerShown: false,
            tabBarLabel: 'Walet',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo name="shopping-bag" size={20} color="#FF6E37" />
              ) : (
                <Entypo name="shopping-bag" size={20} color="silver" />
              ),
          }}
        />

        <Tab.Screen
          name="add"
          component={AddExpense}
          options={{
            headerShown: false,
            // tabBarLabel: 'Add',
            tabBarIcon: ({focused}) => (
              // focused ? (
              <Ionicon name="add-circle" size={65} color="#FF6E37" />
            ),
            // ) : (
            //   <Entypo name="home" size={20} color="silver" />
            // ),
          }}
        />

        <Tab.Screen
          name="statistics"
          component={Statistics}
          options={{
            headerShown: false,
            tabBarLabel: 'Statistics',
            tabBarIcon: ({focused}) =>
              focused ? (
                <FontAwesome name="bar-chart" size={20} color="#FF6E37" />
              ) : (
                <FontAwesome name="bar-chart" size={20} color="silver" />
              ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo name="user" size={20} color="#FF6E37" />
              ) : (
                <Entypo name="user" size={20} color="silver" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="tabs"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="tabs"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="home" component={Home} /> */}
          <Stack.Screen name="addExpense" component={AddExpense} />
          <Stack.Screen name="setting" component={Setting} />
          <Stack.Screen
            name="transactionDetail"
            component={TransactionDetail}
          />
          <Stack.Screen name="currency" component={Currency} />
          {/* <Stack.Screen name="walet" component={Walet} /> */}
          {/* <Stack.Screen name="statistics" component={Statistics} /> */}
        </Stack.Navigator>
      </NavigationContainer>

      {/* <Home /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
