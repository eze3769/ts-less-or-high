import React from 'react';
import { View } from 'react-native';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Main from '../../components/main';

type HomePageProps = {
  className?: string;
  header?: React.ReactNode;
};

const HomePage: React.FC<HomePageProps> = ({ className, header }) => {
  return (
    <Layout header={<Header />}>
      <View>
        <Main />
      </View>
    </Layout>
  );
};

export default HomePage;
