import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

import InputText from '../components/Input';
import Image from '../components/Image';
import Button from '../components/Button';
import colors from '../config/colors';

const ecoLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        uri={
          'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/Eco250.png?alt=media&token=4aa49990-58f9-4810-a57c-4245c5cabe87'
        }
        style={styles.logo}
      />
      <View style={styles.inputText}>
        <InputText
          placeholder='Email'
          placeholderTextColor={colors.green}
          onChangeText={() => {}}
          value={null}
          icon={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/email-icon.png?alt=media&token=e41a8a34-0f51-4cdd-a399-5b61457587ba'
          }
        />
      </View>
      <View style={styles.inputText}>
        <InputText
          placeholder='Password'
          placeholderTextColor={colors.green}
          onChangeText={() => {}}
          value={null}
          icon={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/password-icon.png?alt=media&token=3bd74430-b44e-404d-b53c-42115ed33cc7'
          }
        />
      </View>
      <View style={styles.inputText}>
        <Button
          onPress={() =>
            navigation.navigate('EcoAction', { name: 'EcoActionScreen' })
          }
          title='Login'
          buttonStyle={styles.buttonStyle}
        />
      </View>
      <View style={styles.textLogin}>
        <Text>Don't Have an Account?</Text>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('EcoSignup', { name: 'SignupScreen' })
          }
        >
          <View style={styles.marginHorizontal}>
            <Text style={styles.textGreen}>Register</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* <TouchableWithoutFeedback
        onPress={() => console.log('Forget Password Pressed')}
      >
        <View style={styles.forgetPassword}>
          <Text>Forgot Password?</Text>
        </View>
      </TouchableWithoutFeedback> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  inputText: {
    flex: 1 / 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 12,
    marginHorizontal: 20,
  },
  textLogin: {
    flex: 1 / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
  textGreen: {
    color: colors.green,
  },
  // forgetPassword: {
  //   flex: 1 / 10,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: -20,
  // },
});

export default ecoLogin;
