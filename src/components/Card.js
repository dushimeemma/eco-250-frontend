import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from './Button';
import colors from '../config/colors';

const Card = ({
  content,
  onPress,
  cardStyle,
  cardTextStyle,
  title,
  cardButtonTextStyle,
}) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.cardView}>
        <Text style={[styles.cardText, cardTextStyle]}>{content}</Text>
      </View>
      <Button
        title={title}
        onPress={onPress}
        textStyle={[styles.cardButtonText, cardButtonTextStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 380,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.white,
    margin: 10,
  },
  cardView: {
    margin: 10,
  },
  cardText: {
    color: colors.white,
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
