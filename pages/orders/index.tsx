import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Layout from '../../components/layout';
import { buttonProp } from '../../constants';

type OrdersPageProps = {
  navigation: NavigationProp<ParamListBase>;
};

const OrdersPage: React.FC<OrdersPageProps> = ({ navigation }) => {
  return (
    <Layout>
      <Text>Orders</Text>
      <Pressable style={style.button} onPress={() => navigation.navigate('Description')}>
        <Text style={style.buttonText}>Details</Text>
      </Pressable>
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
