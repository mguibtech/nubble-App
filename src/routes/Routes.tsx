import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/auth/LoginScreen/LoginScreen"
import { SignUpScreen } from "../screens/auth/SignUpScreen/SignUpScreen"

export type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    //TODO: Add more screens (SUCCESS)
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoginScreen"
                screenOptions={{
                    headerShown: false,
                    animation: "slide_from_right",
                    fullScreenGestureEnabled: true,
                }}
            >
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}