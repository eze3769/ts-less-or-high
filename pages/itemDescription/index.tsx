import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/header';
import Layout from '../../components/layout';

type ItemDescriptionPageProps = {};

const ItemDescriptionPage = () => {
  return (
    <Layout header={<Header />}>
      <Text style={{ fontWeight: '600' }}>Description:</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum cum debitis necessitatibus libero architecto
        ducimus vero accusantium fugiat molestias, illo iure adipisci ex quo perspiciatis provident fuga eos porro
        mollitia.
      </Text>
    </Layout>
  );
};

export default ItemDescriptionPage;
