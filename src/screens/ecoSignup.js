import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Modal,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import BackgroundImage from '../components/BackgroundImage';
import InputText from '../components/Input';
import Image from '../components/Image';
import Button from '../components/Button';
import Errors from '../components/Errors';
import colors from '../config/colors';
import { register } from '../redux/actions/auth';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label('First Name'),
  lastName: Yup.string().required().label('Last Name'),
  email: Yup.string().required().label('Email'),
  password: Yup.string().required().label('Password'),
  phoneNumber: Yup.string().required().label('Contact'),
});

const ecoSignup = ({ navigation }) => {
  const dispatch = useDispatch();

  const { message, isLoading } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.errors);
  const registerNewUser = (user) => {
    dispatch(register(user));
  };

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
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
          }}
          onSubmit={registerNewUser}
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
              {error ? (
                <Errors error={`${error}`} />
              ) : (
                <Errors error={`${message}`} style={{ color: colors.white }} />
              )}

              <View style={styles.inputText}>
                <InputText
                  name='firstName'
                  placeholder='FirstName'
                  placeholderTextColor={colors.green}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  icon={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/usericon.png?alt=media&token=ef802cee-3311-4e9c-b535-83485a49128f'
                  }
                />
              </View>
              {errors.firstName && touched.firstName && (
                <Errors error={`${errors.firstName}`} />
              )}
              <View style={styles.inputText}>
                <InputText
                  name='lastName'
                  placeholder='LastName'
                  placeholderTextColor={colors.green}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  icon={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/usericon.png?alt=media&token=ef802cee-3311-4e9c-b535-83485a49128f'
                  }
                />
              </View>
              {errors.lastName && touched.lastName && (
                <Errors error={`${errors.lastName}`} />
              )}
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
                <InputText
                  name='phoneNumber'
                  placeholder='Contact'
                  placeholderTextColor={colors.green}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  icon={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/contact-icon.png?alt=media&token=6b87fc2b-b359-47fc-a944-697ecad159ed'
                  }
                />
              </View>
              {errors.phoneNumber && touched.phoneNumber && (
                <Errors error={`${errors.phoneNumber}`} />
              )}
              <View style={styles.inputText}>
                <Button
                  isLoading={isLoading}
                  onPress={handleSubmit}
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
    margin: 2,
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

export default ecoSignup;
