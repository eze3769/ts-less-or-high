import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Layout from '../../components/layout';
import { buttonProp } from '../../constants';

type OrdersPageProps = {
  navigation: NavigationProp<ParamListBase>;
};

const OrdersPage: React.FC<OrdersPageProps> = ({ navigation }) => {
  return (
    <Layout>
      <Text>No orders yet</Text>
    </Layout>
  );
};

export default OrdersPage;

const style = StyleSheet.create({
  button: {
    ...buttonProp,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});
