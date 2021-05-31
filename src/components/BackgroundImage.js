import React from 'react';
import { ImageBackground } from 'react-native';

const BackgroundImage = ({ uri, children, style }) => {
  return (
    <ImageBackground style={style} source={{ uri }}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
