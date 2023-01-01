import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Main from '../../components/main';

type HomePageProps = {
  className?: string;
  header?: React.ReactNode;
  navigation: NavigationProp<ParamListBase>;
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <Layout header={<Header />}>
      <Main navigation={navigation} />
    </Layout>
  );
};

export default HomePage;
