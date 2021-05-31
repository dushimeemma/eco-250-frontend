import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const ScrollHorizontal = ({ children, containerStyle }) => {
  return (
    <ScrollView horizontal={true} style={[styles.container, containerStyle]}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScrollHorizontal;
