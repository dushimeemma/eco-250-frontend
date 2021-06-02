import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Alert,
  Pressable,
  Modal,
} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import ListTextView from '../components/ListTextView';
import ProfilePicture from '../components/Image';
import CustomText from '../components/Text';
import Divider from '../components/Divider';
import Icon from '../components/Icon';
import Card from '../components/Card';
import ScrollHorizontal from '../components/ScrollableHorizontal';
import DaysCard from '../components/DaysCard';
import colors from '../config/colors';

const profile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tree, setTrees] = useState([
    {
      id: 1,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/tree.png?alt=media&token=931e7fc5-6021-458f-8466-37e71e331323',
    },
    {
      id: 2,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/tree.png?alt=media&token=931e7fc5-6021-458f-8466-37e71e331323',
    },
    {
      id: 3,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/tree.png?alt=media&token=931e7fc5-6021-458f-8466-37e71e331323',
    },
    {
      id: 4,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/tree.png?alt=media&token=931e7fc5-6021-458f-8466-37e71e331323',
    },
    {
      id: 5,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/tree.png?alt=media&token=931e7fc5-6021-458f-8466-37e71e331323',
    },
    {
      id: 6,
      uri: 'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/tree.png?alt=media&token=931e7fc5-6021-458f-8466-37e71e331323',
    },
  ]);
  return (
    <View style={styles.container}>
      {/* modal starting ...... */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* modal ending ......*/}
      <BackgroundImage
        style={styles.image}
        uri={
          'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/cover.jpg?alt=media&token=ea63d6af-eff1-49ef-a43c-9c9272b1dfb4'
        }
      >
        <ScrollView style={styles.container}>
          <View style={styles.whiteBackground}>
            <View style={styles.topDescription}>
              <View style={styles.listViewWidth}>
                <ListTextView title='Level' description='INDAMIRWA' />
                <ListTextView title='Climate Positive' description='8 Months' />
              </View>
              <View style={styles.ecoNextBackground}>
                <BackgroundImage
                  style={styles.imageEcoNext}
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/econext.png?alt=media&token=74aa2c5d-cd2d-406b-8e81-082d5426e844'
                  }
                />
              </View>
            </View>
          </View>
          <View style={[styles.profilePicture, { marginTop: -100 }]}>
            <ProfilePicture
              style={styles.profilePictureImage}
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/eco-profile.png?alt=media&token=f5dc843e-904e-4f8b-a07d-befd9ebf4deb'
              }
            />
            <CustomText style={styles.nameText}>Hi, Douce</CustomText>
            <CustomText>Member #2537</CustomText>
          </View>

          <Divider style={styles.divider} />
          <View style={styles.profilePicture}>
            <Icon
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/ecofriendly-product-logo.png?alt=media&token=bbc3782e-c285-4ce2-b2c4-d25b8114c387'
              }
              title='Eco-friendly Products'
              quantity='79 items'
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.iconsDivision}>
            <Icon
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/carbon-removed.png?alt=media&token=2c2b91ee-daf4-44cd-8854-12323a2cb90b'
              }
              title='Carbon Removed'
              quantity='5.5Ton'
            />
            <Icon
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/carbon-saved.png?alt=media&token=fd557792-6133-497f-849f-1cfd1c4fa08e'
              }
              title='Carbon Saved'
              quantity='789Kg'
            />
            <Icon
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/plastic-saved.png?alt=media&token=ea43a4fa-5066-4f3f-bfec-3581015265ff'
              }
              title='Plastic Saved'
              quantity='568 items'
            />
            <Icon
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/plastic-removed.png?alt=media&token=685d1ff1-ca22-45a8-934e-699130dba9e0'
              }
              title='Plastic Removed'
              quantity='167Kg'
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.profilePicture}>
            <Icon
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/forest.png?alt=media&token=add19147-c89c-419b-9b39-c987a012073d'
              }
              title='Trees in their forest'
              quantity='2436'
            />
          </View>
          <Divider style={styles.divider} />
          <Divider style={styles.divider} />
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('EcoTakeAction', { name: 'EcoTakeAction' })
            }
          >
            <View style={styles.actionButton}>
              <ProfilePicture
                style={styles.actionButtonImage}
                uri={
                  'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/take-action.png?alt=media&token=e7e40b58-fc91-46bc-bd2c-1e0881dde160'
                }
              />
            </View>
          </TouchableWithoutFeedback>
          <Divider style={styles.divider} />
          <Divider style={styles.divider} />
          <ScrollHorizontal containerStyle={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Card
                content={
                  "We plant one tree for every order delivered. This planted tree is owned by our client where she/he can track the life of that tree and access more information on his/her dashboard. Our business first is to change people's habits from unstainable to sustainable and our model helps our community to become awre of the environments through a creative user dashboard and supporting different projects we developed. Under Eco250....."
                }
                onPress={() => console.log('Pressed')}
                title='About Eco 250'
              />
              <Card
                content={
                  "We plant one tree for every order delivered. This planted tree is owned by our client where she/he can track the life of that tree and access more information on his/her dashboard. Our business first is to change people's habits from unstainable to sustainable and our model helps our community to become awre of the environments through a creative user dashboard and supporting different projects we developed. Under Eco250....."
                }
                onPress={() => console.log('Pressed')}
                title='What is sustainability'
              />
              <Card
                content={
                  "We plant one tree for every order delivered. This planted tree is owned by our client where she/he can track the life of that tree and access more information on his/her dashboard. Our business first is to change people's habits from unstainable to sustainable and our model helps our community to become awre of the environments through a creative user dashboard and supporting different projects we developed. Under Eco250....."
                }
                onPress={() => console.log('Pressed')}
                title='About Eco 250'
              />
              <Card
                content={
                  "We plant one tree for every order delivered. This planted tree is owned by our client where she/he can track the life of that tree and access more information on his/her dashboard. Our business first is to change people's habits from unstainable to sustainable and our model helps our community to become awre of the environments through a creative user dashboard and supporting different projects we developed. Under Eco250....."
                }
                onPress={() => console.log('Pressed')}
                title='What is sustainability'
              />
            </View>
          </ScrollHorizontal>
          <Divider style={styles.divider} />
          <Divider style={styles.divider} />
          <ScrollHorizontal containerStyle={styles.cardContainer}>
            <View style={styles.dailyTipsContainer}>
              <View style={styles.dailyTipsContent}>
                <View>
                  <Text style={styles.dailyTipsTextTop}>Daily Tips</Text>
                  <View style={styles.dailyTipsView}>
                    <Text style={styles.dailyTipsText}>
                      Save water at my home
                    </Text>
                  </View>
                </View>
                <ProfilePicture
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/Screen%20Shot%202021-05-28%20at%2011.53.16.png?alt=media&token=eb616155-b21c-45bb-8dd8-646195536c19'
                  }
                  style={styles.dailyTipsImage}
                />
              </View>
              <View style={styles.dailyTipsDaysView}>
                <DaysCard
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/declined.png?alt=media&token=bfef340e-2a9b-42a0-9a39-a4e0fc548e3a'
                  }
                  day='S'
                />
                <DaysCard
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/approved.png?alt=media&token=8775c969-4fbc-4d8d-8951-58b4b1cba3c4'
                  }
                  day='M'
                />
                <DaysCard
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/approved.png?alt=media&token=8775c969-4fbc-4d8d-8951-58b4b1cba3c4'
                  }
                  day='T'
                />
                <DaysCard
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/empty.png?alt=media&token=044fcac5-c7e5-49e1-862e-9985186f7001'
                  }
                  day='W'
                />
                <DaysCard
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/empty.png?alt=media&token=044fcac5-c7e5-49e1-862e-9985186f7001'
                  }
                  day='T'
                />
                <DaysCard
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/empty.png?alt=media&token=044fcac5-c7e5-49e1-862e-9985186f7001'
                  }
                  day='F'
                />
                <DaysCard
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/empty.png?alt=media&token=044fcac5-c7e5-49e1-862e-9985186f7001'
                  }
                  day='S'
                />
              </View>
            </View>
          </ScrollHorizontal>
          <Divider style={styles.divider} />
          <Divider style={styles.divider} />
          <ScrollView style={styles.field}>
            <View style={styles.trees}>
              {tree.map((tree) => (
                <TouchableWithoutFeedback
                  onPress={() => setModalVisible(true)}
                  key={tree.id}
                >
                  <View>
                    <ProfilePicture uri={tree.uri} style={styles.treesView} />
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 32,
  },
  imageEcoNext: {
    flex: 1,
    resizeMode: 'cover',
  },
  whiteBackground: {
    backgroundColor: colors.white,
    height: 200,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  topDescription: {
    flex: 1 / 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  listViewWidth: {
    width: 200,
    height: 50,
  },
  ecoNextBackground: {
    width: 150,
    height: 50,
  },
  profilePicture: {
    flex: 1 / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsDivision: {
    flex: 1 / 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePictureImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nameText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  divider: {
    height: 20,
  },
  actionButton: {
    flex: 1 / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonImage: {
    width: 200,
    height: 50,
    borderRadius: 15,
  },
  cardContainer: {
    flex: 1 / 6,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  dailyTipsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dailyTipsContent: {
    flex: 1 / 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dailyTipsImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -10,
    marginTop: 10,
  },
  dailyTipsIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  dailyTipsText: {
    color: colors.white,
  },
  dailyTipsTextTop: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -15,
    zIndex: 1,
    marginLeft: 10,
  },
  dailyTipsView: {
    padding: 20,
    backgroundColor: colors.green,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  dailyTipsDaysView: {
    marginLeft: 20,
    flex: 1 / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dailyTipsDaysCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  field: {
    flex: 1,
  },
  trees: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  treesView: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 25,
    //  transform: [{ rotate: '45deg' }]
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default profile;
