import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder';
import Layout from '../../components/layout';
import ProductCard from '../../components/product-card';
import { buttonProp, container } from '../../constants';
import { AppState } from '../../store';
import { getCatalog } from '../../store/catalog/action-creators';
import { GET_CATALOG } from '../../store/catalog/action-types';
import { isLoading } from '../../store/ui/loading';

type CatalogPageProps = {
  navigation: NavigationProp<ParamListBase>;
};

const CatalogPage: React.FC<CatalogPageProps> = ({ navigation }) => {
  const catalog = useSelector((state: AppState) => state.catalog);
  const catalogLoading = useSelector((state: AppState) => isLoading(state, GET_CATALOG));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCatalog());
  }, []);
  console.log(catalogLoading);
  return (
    <Layout>
      <Text style={{ fontSize: 24, marginHorizontal: 18, marginTop: 5, marginBottom: 10 }}>Products</Text>
      {catalogLoading ? (
        Array(4)
          .fill('')
          .map(() => (
            <View style={container}>
              <Placeholder Animation={Fade} Left={PlaceholderMedia}>
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
              </Placeholder>
            </View>
          ))
      ) : (
        <FlatList
          data={catalog.catalog}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard navigation={navigation} item={item} />}
        />
      )}
      <Pressable style={style.button} onPress={() => navigation.navigate('Description')}>
        <Text style={style.buttonText}>Details</Text>
      </Pressable>
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
