import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('EcoShop', { name: 'EcoShop' })}
      >
        <Text>Hello from {route.params.name} screen</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default home;
