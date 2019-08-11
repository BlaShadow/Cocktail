import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import {
  createStackNavigator,
  NavigationRouteConfigMap,
  StackNavigatorConfig,
  createAppContainer
} from 'react-navigation';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import CocktailListScreen from '../screens/CocktailListScreen/CocktailListScreen';
import LinearGradient from 'react-native-linear-gradient';

const screenConfig: NavigationRouteConfigMap = {
  home: {
    screen: HomeScreen,
  },
  cocktailList: {
    screen: CocktailListScreen
  }
}

const stackConfig: StackNavigatorConfig = {
  initialRouteName: 'home'
}

const stacknavigation = createStackNavigator(screenConfig, stackConfig);

export default createAppContainer(stacknavigation);
