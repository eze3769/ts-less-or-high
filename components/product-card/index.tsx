import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { container } from '../../constants';

type ProductCardProps = {
  item: any;
  navigation: NavigationProp<ParamListBase>;
};

const ProductCard: React.FC<ProductCardProps> = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      style={{ display: 'flex', alignItems: 'center', width: '100%' }}
      onPress={() => navigation.navigate('Description', { itemId: item.id })}
    >
      <View style={styles.container}>
        <View style={styles.flexWrapper}>
          <Image
            style={styles.cardLogo}
            source={{
              uri: item.thumbnail,
            }}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>$ {item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardLogo: {
    width: '30%',
    height: 100,
  },
  container: {
    ...container,
  },
  flexWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  titleContainer: {
    display: 'flex',
    flexShrink: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
  subtitle: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '400',
  },
});
