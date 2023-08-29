import React, { FunctionComponent } from "react";
import { View } from "react-native";

// Screens
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";

// custom components
import { colors } from "../utils/colors";
import Avi from "../../assets/avi/avatar.png";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            height: 120,
          } as any,
          headerShadowVisible: false,
          headerTintColor: colors.secondary,

          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{
                backgroundColor: colors.tertiary,
                marginRight: 25,
              }}
            />
          ),
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Jahan Zeb!"
                subText="Welcome Back"
                {...props}
              />
            ),
            headerLeft: () => <View style={{ marginLeft: 25 }} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
