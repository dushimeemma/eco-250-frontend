import React from 'react';
import { Image } from 'react-native';

const ImageUrl = ({ style, uri }) => {
  return <Image style={style} source={{ uri }} />;
};

export default ImageUrl;
