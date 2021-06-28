import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';

import colors from '../config/colors';

const Button = ({ onPress, title, buttonStyle, textStyle, isLoading }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.cardButton, buttonStyle]}>
        {isLoading ? (
          <Text style={[styles.cardText, textStyle]}>Loading...</Text>
        ) : (
          <Text style={[styles.cardText, textStyle]}>{title}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
    borderRadius: 15,
  },
  cardText: {
    color: colors.white,
  },
});

export default Button;
