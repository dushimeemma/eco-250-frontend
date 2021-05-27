import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomText from './Text';
import colors from '../config/colors';

const ListTextView = ({ title, description }) => {
  return (
    <View style={styles.listView}>
      <CustomText style={styles.textLight}>{title}: </CustomText>
      <CustomText style={styles.textBold}>{description} </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.green,
  },
  textLight: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.green,
  },
  listView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default ListTextView;
