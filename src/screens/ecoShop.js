import React, { useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import ImageUrl from '../components/Image';
import Text from '../components/Text';
import Divider from '../components/Divider';
import Input from '../components/Input';
import colors from '../config/colors';

const ecoShop = ({ navigation }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/product-5.png?alt=media&token=b33ecc6f-0ea8-4e79-a128-c0f9ade3230d',
      title: 'product one',
      price: '$15',
      like: false,
    },
    {
      id: 2,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/product-4.png?alt=media&token=fe62374e-2fe4-475b-a4f1-56bd1e2d6372',
      title: 'product two',
      price: '$15',
      like: true,
    },
    {
      id: 3,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/product-6.png?alt=media&token=7989423a-2322-4702-9574-a557aa0e5407',
      title: 'product three',
      price: '$15',
      like: false,
    },
    {
      id: 4,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/product-7.png?alt=media&token=ff75ad4f-5934-4678-818f-bfc94d86906a',
      title: 'product four',
      price: '$15',
      like: false,
    },
    {
      id: 5,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/product-8.png?alt=media&token=c2af386d-5d33-4650-b638-520761298761',
      title: 'product five',
      price: '$15',
      like: true,
    },
  ]);
  return (
    <>
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('EcoAction', { name: 'EcoAction ' })
          }
        >
          <View style={styles.menuIconView}>
            <ImageUrl
              style={styles.menuIcon}
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/menu-icon.png?alt=media&token=23f88118-2e2c-4816-adea-538a75eb780f'
              }
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.nextIconView}>
          <ImageUrl
            style={styles.nextIcon}
            uri={
              'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/econext.png?alt=media&token=74aa2c5d-cd2d-406b-8e81-082d5426e844'
            }
          />
        </View>
        <Divider style={styles.divider} />
        <Input
          placeholder='Search or type item'
          placeholderTextColor={colors.green}
          onChangeText={() => {}}
          value={null}
          icon={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/search-icon.png?alt=media&token=99b2df90-a90f-4233-9b7a-56122664a10b'
          }
        />
        <ScrollView style={[styles.container, { margin: 20, padding: 20 }]}>
          <View style={styles.gridView}>
            {products.map((product) => (
              <TouchableWithoutFeedback
                onPress={() => console.log(`Clicked product ${product.id}`)}
                key={product.id}
              >
                <View>
                  <ImageUrl
                    style={styles.productIcon}
                    uri={
                      product.like
                        ? 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/liked.png?alt=media&token=3e014cd1-fb05-49c2-8dc6-2f3cd3d46318'
                        : 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/unliked.png?alt=media&token=25dedbcc-5e1a-4876-9875-acb1f38e8380'
                    }
                  />
                  <ImageUrl style={styles.productImage} uri={product.uri} />
                  <Text style={styles.textGreen}>{product.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
        <View style={styles.dividerView}>
          <ImageUrl
            style={styles.bambooIcon}
            uri={
              'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/bamboo-icon-green-left.png?alt=media&token=6a1c08dd-a57e-4183-99e3-ca2378d192c6'
            }
          />
          <View style={styles.textDividerView}>
            <Text style={[styles.textGreen, { marginLeft: -30 }]}>
              Sustainable
            </Text>
            <Text
              style={[styles.textGreen, { fontSize: 24, fontWeight: 'bold' }]}
            >
              Gift
            </Text>
            <Text
              style={[
                styles.textGreen,
                { fontStyle: 'italic', marginLeft: 60 },
              ]}
            >
              Customize your gift
            </Text>
          </View>
          <ImageUrl
            style={styles.bambooIcon}
            uri={
              'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/bamboo-icon-green-right.png?alt=media&token=44537d25-c0b5-4cf4-8b27-c4142ab9a488'
            }
          />
        </View>
        <ScrollView style={[styles.container, { margin: 20, padding: 20 }]}>
          <View style={styles.gridView}>
            {products.map((product) => (
              <TouchableWithoutFeedback
                onPress={() => console.log(`Clicked product ${product.id}`)}
                key={product.id}
              >
                <View>
                  <ImageUrl style={styles.productImage} uri={product.uri} />
                  <Text style={styles.textGreen}>{product.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
      <View style={styles.bottomView}>
        <ImageUrl
          uri={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/product-2.png?alt=media&token=cd809611-9959-4731-b8aa-d77b2f4517e9'
          }
          style={styles.bottomImage}
        />
        <ImageUrl
          uri={
            'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/product-1.png?alt=media&token=40d393c2-1900-4feb-99fb-e54db568937e'
          }
          style={styles.bottomImage}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 32,
    backgroundColor: colors.white,
  },
  divider: {
    height: 25,
  },
  menuIconView: {
    flex: 1 / 6,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 32,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  nextIconView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  textWhite: {
    color: colors.dark,
  },
  textGreen: {
    color: colors.green,
  },
  nextIcon: {
    width: 150,
    height: 50,
  },
  productIcon: {
    width: 20,
    height: 20,
  },
  productImage: {
    width: 100,
    height: 200,
  },
  gridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dividerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bambooIcon: {
    flex: 1 / 3,
    height: 50,
  },
  textDividerView: {
    flex: 1 / 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1 / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  bottomImage: {
    flex: 1,
    width: '50%',
    height: '100%',
  },
});

export default ecoShop;
