import React, { Children } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../constants';

type LayoutProps = {
  className?: string;
  header?: React.ReactElement;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ className, header, children }) => {
  return (
    <View>
      {header ? <View style={style.header}>{header ? header : null}</View> : null}
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default Layout;

const style = StyleSheet.create({
  header: {
    minHeight: 45,
    backgroundColor: palette.blue,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
