
import { Feather } from '@expo/vector-icons'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Pacotes from '../screens/pacotes';
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import Home from '../screens/Home';
import NewPacote from '../screens/pacotes/new'
import EditPacote from '../screens/pacotes/edit'

const Tabs = createBottomTabNavigator()
const ProfileStack = createNativeStackNavigator()

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

export function AppRoutes() {
    return(
        <Tabs.Navigator 
            screenOptions={{ 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: "#343A40",
                },
            }}
        >
            <Tabs.Screen 
                name="Home"
                component={Home}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='home'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="Pacote"
                component={Pacotes}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='map'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='user'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="New"
                component={NewPacote}
                options={{tabBarButton: () => null}}
            />
            <Tabs.Screen 
                name="Edit"
                component={EditPacote}
                options={{tabBarButton: () => null}}
            />
        </Tabs.Navigator>
    )
}