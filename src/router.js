import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import { Root } from "native-base";

import { Easing, Animated } from 'react-native';
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Otp from "./screens/otp/Otp";
import ForgotPassword from "./screens/forgotPassword/ForgotPassword";
import Profile from "./screens/profile/Profile";
import AddProduct from "./screens/addProduct/AddProduct";
import MyProduct from "./screens/myProduct/MyProduct";
import Home from "./screens/home/Home";
import Sidebar from "./screens/sidebar";
import Product from './screens/product/Product';
import Maintenance from './screens/maintenance/404';
import Cart from './screens/cart/Cart';
import Checkout from './screens/checkout/Checkout';
import CheckoutSuccess from './screens/checkout/CheckoutSuccess';
import SplashScreen from './screens/splashscreen';
import History from './screens/history/History';
import Wishlist from './screens/wishlist/Wishlist';

export const BASE_URL = 'http://ec2-54-204-153-133.compute-1.amazonaws.com:4869';

const AppNavigator = createStackNavigator(
  {
    // SplashScreen: { screen: SplashScreen },

    Login: { screen: Login },
    Register: { screen: Register },
    Otp: { screen: Otp },
    ForgotPassword: { screen: ForgotPassword },
    Profile: { screen: Profile },
    AddProduct: { screen: AddProduct },
    MyProduct: { screen: MyProduct },
    Home: { screen: Home },
    Product: { screen: Product },
    Maintenance: { screen: Maintenance },
    Cart: { screen: Cart },
    Checkout: { screen: Checkout },
    CheckoutSuccess: { screen: CheckoutSuccess },
    History: { screen: History },
    Wishlist: { screen: Wishlist },
  },
  {
    // initialRouteName: "Home",
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

const AuthNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
    SplashScreen,
  },
  {
    initialRouteName: 'SplashScreen'
  }
)

const Navigation = createAppContainer(AuthNavigator)
// const AppContainer = createAppContainer(AppNavigator)

export default () => (
  <Root>
    {/* <AppContainer /> */}
    <Navigation />
  </Root>
);
