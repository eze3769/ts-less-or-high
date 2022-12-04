import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { buttonProp } from '../../constants';

type CatalogPageProps = {
  navigation: NavigationProp<ParamListBase>;
};

const CatalogPage: React.FC<CatalogPageProps> = ({ navigation }) => {
  return (
    <Layout header={<Header />}>
      <SafeAreaView>
        <Text>Products</Text>
        <Pressable style={style.button} onPress={() => navigation.navigate('Description')}>
          <Text style={style.buttonText}>Details</Text>
        </Pressable>
      </SafeAreaView>
    </Layout>
  );
};

export default CatalogPage;

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
