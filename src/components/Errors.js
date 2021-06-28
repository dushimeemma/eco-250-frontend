import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomText from './Text';
import colors from '../config/colors';

const Errors = ({ error, style }) => {
  return (
    <View>
      <CustomText style={[styles.errors, style]}>{error}</CustomText>
    </View>
  );
};
const styles = StyleSheet.create({
  errors: {
    color: colors.danger,
  },
});

export default Errors;
