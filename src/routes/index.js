import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EcoAction from '../screens/ecoAction';
import Eco250 from '../screens/eco250';
import EcoShop from '../screens/ecoShop';
import Image from '../components/Image';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='EcoAction'
        component={EcoAction}
        options={{ title: 'Welcome To Eco Actions' }}
      />
      <Stack.Screen name='Eco250' component={Eco250} />
      <Stack.Screen name='EcoShop' component={EcoShop} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='EcoAction'
        tabBarOptions={{
          activeTintColor: '#42f44b',
          showLabel: false,
        }}
      >
        <Tab.Screen
          name='Eco250'
          component={StackNavigator}
          options={{
            tabBarLabel: 'Eco250',
            tabBarIcon: () => (
              <Image
                style={styles.image}
                uri={
                  'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/Eco250.png?alt=media&token=4aa49990-58f9-4810-a57c-4245c5cabe87'
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name='EcoAction'
          component={StackNavigator}
          options={{
            tabBarLabel: 'EcoAction',
            tabBarIcon: () => (
              <Image
                style={styles.image}
                uri={
                  'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/EcoAct.png?alt=media&token=4f903511-0b0d-4d8b-a9d7-731ae0867966'
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name='EcoShop'
          component={StackNavigator}
          options={{
            tabBarLabel: 'EcoShop',
            tabBarIcon: () => (
              <Image
                style={styles.image}
                uri={
                  'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/Ecosh.png?alt=media&token=ff759712-2ad2-47d2-a596-65846a216138'
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 50,
  },
});

export default TabNavigator;
