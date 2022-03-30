import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import BackgroundImage from '../components/BackgroundImage';
import Errors from '../components/Errors';
import InputText from '../components/Input';
import Image from '../components/Image';
import Button from '../components/Button';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label('Email'),
  password: Yup.string().required().label('Password'),
});

const ecoLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackgroundImage
        style={styles.image}
        uri={
          'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/cover.jpg?alt=media&token=ea63d6af-eff1-49ef-a43c-9c9272b1dfb4'
        }
      >
        <Image
          uri={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/Eco250.png?alt=media&token=4aa49990-58f9-4810-a57c-4245c5cabe87'
          }
          style={styles.logo}
        />
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            handleBlur,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.inputText}>
                <InputText
                  name='email'
                  placeholder='Email'
                  placeholderTextColor={colors.green}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  icon={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/email-icon.png?alt=media&token=e41a8a34-0f51-4cdd-a399-5b61457587ba'
                  }
                />
              </View>
              {errors.email && touched.email && (
                <Errors error={`${errors.email}`} />
              )}
              <View style={styles.inputText}>
                <InputText
                  name='password'
                  placeholder='Password'
                  placeholderTextColor={colors.green}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  icon={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/password-icon.png?alt=media&token=3bd74430-b44e-404d-b53c-42115ed33cc7'
                  }
                />
              </View>
              {errors.password && touched.password && (
                <Errors error={`${errors.password}`} />
              )}
              <View style={styles.inputText}>
                <Button
                  onPress={handleSubmit}
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
            </>
          )}
        </Formik>
      </BackgroundImage>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ecoLogin;
