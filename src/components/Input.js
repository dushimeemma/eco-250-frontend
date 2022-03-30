import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import ImageUrl from '../components/Image';
import colors from '../config/colors';

const Input = ({
  name,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  icon,
  onBlur,
}) => {
  return (
    <View style={styles.searchInput}>
      <ImageUrl
        style={styles.searchIcon}
        uri={
          icon
            ? icon
            : 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/search-icon.png?alt=media&token=99b2df90-a90f-4233-9b7a-56122664a10b'
        }
      />
      <TextInput
        name={name}
        style={styles.textInput}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder ? placeholder : 'Search or type item'}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : colors.green
        }
        showSoftInputOnFocus={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    width: '100%',
    height: '100%',
  },
});

export default Input;
