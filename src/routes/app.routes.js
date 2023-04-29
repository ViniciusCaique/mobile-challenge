
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Tabs = createBottomTabNavigator()
const ProfileStack = createNativeStackNavigator()

const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator
            initialRouteName="Login"
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
                headerShown: false
            }}
        >
            <Tabs.Screen 
                name="Home"
                component={Home}
            />
            <Tabs.Screen 
                name="Profile"
                component={ProfileStackScreen}
            />
        </Tabs.Navigator>
    )
}