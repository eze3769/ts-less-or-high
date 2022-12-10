import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '..';
import SearchBar from '../../components/search-bar';
import CartPage from '../../pages/cart';
import CatalogPage from '../../pages/catalog';
import ItemDescriptionPage from '../../pages/itemDescription';

const ShopNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Catalog" screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Catalog"
        component={CatalogPage}
        options={{
          headerTitle: (props) => <SearchBar />,
        }}
      />
      <Stack.Screen name="Description" component={ItemDescriptionPage} />
      <Stack.Screen name="Cart" component={CartPage} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
