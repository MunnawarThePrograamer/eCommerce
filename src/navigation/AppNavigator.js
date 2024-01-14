import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen, ShopScreen, AboutScreen, ContactScreen, JournalScreen } from '../screens';

const Tab = createBottomTabNavigator();

// Individual stack navigator for Home tab
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    {/* Add more screens for the Home tab if needed */}
  </HomeStack.Navigator>
);

// Individual stack navigator for Shop tab
const ShopStack = createStackNavigator();
const ShopStackScreen = () => (
  <ShopStack.Navigator>
    <ShopStack.Screen name="Shop" component={ShopScreen} />
    {/* Add more screens for the Shop tab if needed */}
  </ShopStack.Navigator>
);

// Individual stack navigator for About tab
const AboutStack = createStackNavigator();
const AboutStackScreen = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen name="About" component={AboutScreen} />
    {/* Add more screens for the About tab if needed */}
  </AboutStack.Navigator>
);

// Individual stack navigator for Contact tab
const ContactStack = createStackNavigator();
const ContactStackScreen = () => (
  <ContactStack.Navigator>
    <ContactStack.Screen name="Contact" component={ContactScreen} />
    {/* Add more screens for the Contact tab if needed */}
  </ContactStack.Navigator>
);

// Individual stack navigator for Journal tab
const JournalStack = createStackNavigator();
const JournalStackScreen = () => (
  <JournalStack.Navigator>
    <JournalStack.Screen name="Journal" component={JournalScreen} />
    {/* Add more screens for the Journal tab if needed */}
  </JournalStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home-") {
          iconName = "home";
        } else if (route.name === "Shop-") {
          iconName = "cart";
        } else if (route.name === "About-") {
          iconName = "information-circle";
        } else if (route.name === "Contact-") {
          iconName = 'settings';
        } else if (route.name === "Journal-") {
          iconName = 'book';
        }
        else if (route.name === "Cart") {
          iconName = 'cart';
        }
        else if (route.name === "Account") {
          iconName = 'man';
        }
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home-" component={HomeStackScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Shop-" component={ShopStackScreen} options={{ headerShown: false }} />
    <Tab.Screen name="About-" component={AboutStackScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Contact-" component={ContactStackScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Journal-" component={JournalStackScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Cart" component={JournalStackScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Account" component={JournalStackScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default TabNavigator;
