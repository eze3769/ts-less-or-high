import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Layout from '../../components/layout';
import { buttonProp } from '../../constants';

type CartPageProps = {
  navigation: NavigationProp<ParamListBase>;
};

const CartPage: React.FC<CartPageProps> = ({ navigation }) => {
  return (
    <Layout>
      <Text>Cart</Text>
      <Pressable style={style.button} onPress={() => navigation.navigate('Description')}>
        <Text style={style.buttonText}>Details</Text>
      </Pressable>
    </Layout>
  );
};

export default CartPage;

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
