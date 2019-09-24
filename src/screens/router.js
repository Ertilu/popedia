import React from "react";
import { createDrawerNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'


import Home from "./home/Home";

const Router = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null,
            },
        }
    },
    {
        initialRouteName: "Home",
    }
);

// const Drawer = createAppContainer(Drawer)

// export default (Drawer)

export default createAppContainer(Router)
