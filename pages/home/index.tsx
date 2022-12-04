import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
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
      <SafeAreaView>
        <Main navigation={navigation} />
      </SafeAreaView>
    </Layout>
  );
};

export default HomePage;
