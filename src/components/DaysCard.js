import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import ProfilePicture from './Image';
import colors from '../config/colors';

const DaysCard = ({ uri, day }) => {
  return (
    <View style={styles.dailyTipsDaysCard}>
      <Text style={styles.dailyTipsText}>{day}</Text>
      <ProfilePicture uri={uri} style={styles.dailyTipsIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  dailyTipsDaysCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  dailyTipsText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  dailyTipsIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
});

export default DaysCard;
