import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SearchBar } from '@rneui/themed';

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../../navigation';
import IconWrapper from '../icon-wrapper';

type SearchBarComponentProps = {};

type SearchBarNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Catalog'>;

const SearchBarComponent: React.FC<SearchBarComponentProps> = () => {
  const [search, setSearch] = React.useState<string>();
  const navigation = useNavigation<SearchBarNavigationProps>();

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 20,
      }}
    >
      <View style={{ width: '80%' }}>
        <SearchBar platform="ios" placeholder="Search..." onChangeText={handleSearch} value={search} />
      </View>
      <Pressable style={{ width: '20%', marginHorizontal: 15 }} onPress={() => navigation.navigate('Cart')}>
        <IconWrapper iconId="shopping-cart" size={25} />
      </Pressable>
    </View>
  );
};

export default SearchBarComponent;

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 5,
    width: '50%',
  },
});
