import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EditScreen from "../screens/edit";
import ActivitiesScreen from "../screens/activities";
import MoreScreen from "../screens/more";
import TypesScreen from "../screens/types";
import GoalsScreen from "../screens/goals";

const Tab = createMaterialTopTabNavigator()
export default function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ size }) => {
              let iconName;
              if (route.name === 'Activities') {
                iconName = 'stopwatch'

              } else if (route.name === 'Edit') {
                iconName = 'book-open'
              }
              else if (route.name === 'Goals') {
                iconName = 'bell'
              }
              else if (route.name === 'Types') {
                iconName = 'list-ul'
              }
              else if (route.name === 'More') {
                iconName = 'arrow-circle-right'
              }
              return <Icon name={iconName} size={16} color='white' />;
            },

            tabBarShowIcon: true,
            tabBarStyle: {
              backgroundColor: '#223344',
              height: 42,
              borderBottomColor: '#0096ed',
              borderBottomWidth: 2,
            }
          }
        }}
      >
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Edit" component={EditScreen} />
        <Tab.Screen name="Goals" component={GoalsScreen} />
        <Tab.Screen name="Types" component={TypesScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

