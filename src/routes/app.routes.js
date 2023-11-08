
import { Feather } from '@expo/vector-icons'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, TouchableOpacity } from "react-native";

import Pacotes from '../screens/pacotes';
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import Home from '../screens/Home';
import NewPacote from '../screens/pacotes/new'
import EditPacote from '../screens/pacotes/edit'

const Tabs = createBottomTabNavigator()
const ProfileStack = createNativeStackNavigator()
const PacksStack = createNativeStackNavigator()

const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <ProfileStack.Screen name="Login" component={Login} />
            <ProfileStack.Screen name="Register" component={Register} />
        </ProfileStack.Navigator>
    )
}

const PacksStackScreen = () => {
    return(
        <PacksStack.Navigator
            initialRouteName="Pacote"
            screenOptions={{ headerShown: false }}
        >
            <PacksStack.Screen name="Pacote" component={Pacotes} />
            <PacksStack.Screen name="New" component={NewPacote} />
            <PacksStack.Screen name="Edit" component={EditPacote} />
        </PacksStack.Navigator>
    )
}

const MainBottomBar = () => {
    return(
        <Tabs.Navigator screenOptions={{ 
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "rgb(9 9 11)", elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
            headerTitleStyle: { color: 'white' },
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: "rgb(9 9 11)" },
            tabBarActiveTintColor: "rgb(250 204 21)",
            tabBarInactiveTintColor: "rgb(156 163 175)",
        }}
        >   
            <Tabs.Screen name="Home" component={Home} 
                options={{ tabBarIcon: ({ color }) => ( <Feather name='home' size={25} color={color} /> )}}
            />
            <Tabs.Screen name="Pacotes" component={PacksStackScreen}
                options={{ tabBarIcon: ({ color }) => ( <Feather name='map' size={25} color={color} /> )}}
            />
            <Tabs.Screen name="Profile" component={ProfileStackScreen} 
                options={{ tabBarIcon: ({ color }) => ( <Feather name='user' size={25} color={color} /> )}}
            />
            {/* <Tabs.Screen name="New" component={NewPacote} options={{tabBarButton: () => null}} />
            <Tabs.Screen name="Edit" component={EditPacote} options={{tabBarButton: () => null}} /> */}
        </Tabs.Navigator>
    )
}


export function AppRoutes() {
    return(
        <MainBottomBar />
    )
}