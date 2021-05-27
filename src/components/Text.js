import React from 'react';
import { Text } from 'react-native';

const TextComponent = ({ children, style }) => {
  return <Text style={style}>{children}</Text>;
};

export default TextComponent;
