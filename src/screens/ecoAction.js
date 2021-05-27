import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Eco250', { name: 'eco250' });
        }}
      >
        <Text>Hello from eco Action screen</Text>
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

export default profile;
