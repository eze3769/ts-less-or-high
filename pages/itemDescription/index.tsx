import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { buttonProp } from '../../constants';
import { AppState } from '../../store';

type ItemDescriptionPageProps = {
  route: RouteProp<{ params: { itemId: string } }>;
  navigation: NavigationProp<ParamListBase>;
};

const ItemDescriptionPage: React.FC<ItemDescriptionPageProps> = ({ route, navigation }) => {
  const { itemId } = route.params;
  const products = useSelector((state: AppState) => state.catalog.catalog);

  const product = products.find((prod) => prod.id === itemId + 1);

  if (!product) {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: '800', textAlign: 'center', marginBottom: 40 }}>Item Not Found!</Text>
        <Pressable style={buttonProp} onPress={() => navigation.navigate('Catalog')}>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Back to catalog</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <Layout header={<Header />}>
      <Text style={{ fontWeight: '600' }}>Description:</Text>
      <Text>{itemId}</Text>
    </Layout>
  );
};

export default ItemDescriptionPage;
