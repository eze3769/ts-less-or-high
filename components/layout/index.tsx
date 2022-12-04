import React, { Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      <View>{children}</View>
    </View>
  );
};

export default Layout;

const style = StyleSheet.create({
  header: {
    minHeight: 30,
    backgroundColor: palette.blue,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
