import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CatalogPage from '../pages/catalog';
import HomePage from '../pages/home';
import ItemDescriptionPage from '../pages/itemDescription';

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Catalog" component={CatalogPage} />
        <Stack.Screen name="Description" component={ItemDescriptionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
