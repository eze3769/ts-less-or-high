import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { buttonProp, palette } from '../../constants';

type MainProps = {
  className?: string;
  header?: React.ReactNode;
  navigation: NavigationProp<ParamListBase>;
};

const Main: React.FC<MainProps> = ({ navigation }) => {
  return (
    <View style={style.root}>
      <View>
        <Text style={style.title}>Welcome to simple commerce</Text>
        <View>
          <Pressable style={style.button} onPress={() => navigation.navigate('Shop')}>
            <Text style={style.buttonText}>Products list</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Main;

const style = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 20,
    marginTop: '50%',
    width: '90%',
    backgroundColor: palette.greyScale.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 16,
    marginBottom: 16,
  },
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
