import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProfilePicture from './Image';
import CustomText from './Text';
import colors from '../config/colors';

const Icon = ({ uri, title, quantity }) => {
  return (
    <View style={styles.container}>
      <ProfilePicture style={styles.iconImage} uri={uri} />
      <CustomText style={styles.iconText}>{title}</CustomText>
      <CustomText style={styles.iconText}>{quantity}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'normal',
  },
});

export default Icon;
