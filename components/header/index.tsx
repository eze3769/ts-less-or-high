import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../../constants';

type HeaderProps = {
  className?: string;
  header?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ className, header }) => {
  return (
    <View>
      <Text style={style.text}>E-commerce</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
});
