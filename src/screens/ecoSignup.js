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

const ecoSignup = ({ navigation }) => {
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
          placeholder='Name'
          placeholderTextColor={colors.green}
          onChangeText={() => {}}
          value={null}
          icon={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/usericon.png?alt=media&token=ef802cee-3311-4e9c-b535-83485a49128f'
          }
        />
      </View>
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
        <InputText
          placeholder='Contact'
          placeholderTextColor={colors.green}
          onChangeText={() => {}}
          value={null}
          icon={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/contact-icon.png?alt=media&token=6b87fc2b-b359-47fc-a944-697ecad159ed'
          }
        />
      </View>
      <View style={styles.inputText}>
        <Button
          onPress={() =>
            navigation.navigate('EcoLogin', { name: 'LoginScreen' })
          }
          title='Register'
          buttonStyle={styles.buttonStyle}
        />
      </View>
      <View style={styles.textLogin}>
        <Text>Already Have an Account?</Text>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('EcoLogin', { name: 'LoginScreen' })
          }
        >
          <View style={styles.marginHorizontal}>
            <Text style={styles.textGreen}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
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
});

export default ecoSignup;
