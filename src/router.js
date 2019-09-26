// @flow
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import { Root } from "native-base";

import { Easing, Animated } from 'react-native';
import Login from "./screens/login";
import Register from "./screens/register/Register";
import Otp from "./screens/otp/Otp";
import ForgotPassword from "./screens/forgotPassword/ForgotPassword";
import Home from "./screens/home";
import Sidebar from "./screens/sidebar";
import Product from './screens/product';
import Maintenance from './screens/maintenance/404';
import Cart from './screens/cart/Cart';
import Account from './screens/account/Account';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    Otp: { screen: Otp },
    ForgotPassword: { screen: ForgotPassword },
    Home: { screen: Home },
    Product: { screen: Product },
    Maintenance: { screen: Maintenance },
    Cart: { screen: Cart },
    Account: { screen: Account },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  }
);



const AppContainer = createAppContainer(AppNavigator)

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
