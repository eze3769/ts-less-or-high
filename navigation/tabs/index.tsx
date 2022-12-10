import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MainBottomTabParamList } from '..';
import IconWrapper from '../../components/icon-wrapper';
import { shadowProp } from '../../constants';
import HomePage from '../../pages/home';
import OrdersPage from '../../pages/orders';
import ShopNavigation from '../shop';

const { Navigator, Screen } = createBottomTabNavigator<MainBottomTabParamList>();

const NavigationTabs = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ tabBarShowLabel: false, tabBarStyle: style.tabBar }}>
      <Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => IconWrapper({ iconId: 'home', focused }) }}
      />
      <Screen
        name="Shop"
        component={ShopNavigation}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => IconWrapper({ iconId: 'table-rows', focused }) }}
      />
      <Screen
        name="Orders"
        component={OrdersPage}
        options={{ tabBarIcon: ({ focused }) => IconWrapper({ iconId: 'list-alt', focused, size: 40 }) }}
      />
    </Navigator>
  );
};

export default NavigationTabs;

const style = StyleSheet.create({
  tabBar: {
    ...shadowProp,
    elevation: 5,
    bottom: 15,
    left: 30,
    right: 30,
    position: 'absolute',
    borderRadius: 10,
  },
});
