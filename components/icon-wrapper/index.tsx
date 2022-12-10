import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { palette } from '../../constants';

type IconWrapperProps = {
  iconId: string;
  focused?: boolean;
  size?: number;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ focused, iconId, size }) => {
  return <Icon name={iconId} size={size || 40} color={focused ? palette.blue : palette.greyScale.dark} />;
};

export default IconWrapper;
