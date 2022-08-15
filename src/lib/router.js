import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EditScreen from "../screens/edit";
import ActivitiesScreen from "../screens/activities";
import MoreScreen from "../screens/more";
import TypesScreen from "../screens/types";
import GoalsScreen from "../screens/goals";
// import NewActivities from "../screens/NewActivities";
import NewGoals from "../screens/NewGoals";
import NewTypes from "../screens/NewTypes";
import NewEdit from "../screens/NewEdit";
import Reports from "../screens/Reports";
import Settings from "../screens/Settings";
import Synchronization from "../screens/Syncronization";
import Help from "../screens/Help";
import About from "../screens/About";
import Contribute from "../screens/Contribute";
import Rate from "../screens/Rate";
import Running from "../screens/Running";
import Paused from "../screens/Paused";
import Stopped from "../screens/Stopped";




const Tab = createMaterialTopTabNavigator()
function Home() {
  return (
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

  );
}

const Tab2 = createMaterialTopTabNavigator()
function Home2() {
  return (
    <Tab2.Navigator

      screenOptions={({ route }) => {
        return {
          tabBarShowLabel: true,
          tabBarItemStyle: {
            paddingBottom: 20,
            margin: 5,
          },
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 52,
            borderBottomColor: '#0096ed',
            borderBottomWidth: 0.5,
          }
        }
      }}
    >
      <Tab2.Screen name="Running" component={Running} />
      <Tab2.Screen name="Paused" component={Paused} />
      <Tab2.Screen name="Stopped" component={Stopped} />

    </Tab2.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ HeaderShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

        <Stack.Screen name="Home2" component={Home2} options={{ headerShown: false }} />
        {/* <Stack.Screen name="NewActivities" component={NewActivities} options={{ headerShown: false }} /> */}

        <Stack.Screen name="NewGoals" component={NewGoals} options={{ headerShown: false }} />
        <Stack.Screen name="NewTypes" component={NewTypes} options={{ headerShown: false }} />
        <Stack.Screen name="NewEdit" component={NewEdit} options={{ headerShown: false }} />
        <Stack.Screen name="Reports" component={Reports} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="Synchronization" component={Synchronization} options={{ headerShown: false }} />
        <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Contribute" component={Contribute} options={{ headerShown: false }} />
        <Stack.Screen name="Rate" component={Rate} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
