import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
    className?: string;
    header?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ className, header }) => {
  return (
        <View>
            <Text style={style.text}>
                Higher or lesser DrinkGame
            </Text>
        </View>
  )
}

export default Header;

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5
  }
})