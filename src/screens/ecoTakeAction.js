import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import ListTextView from '../components/ListTextView';
import ProfilePicture from '../components/Image';
import CustomText from '../components/Text';
import Divider from '../components/Divider';
import DaysCard from '../components/DaysCard';
import colors from '../config/colors';

const takeAction = ({ navigation }) => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: 'Take a bus instead of a motor bike',
      status: 'uncompleted',
    },
    {
      id: 2,
      title: 'Take a bus instead of a motor bike',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Take a bus instead of a motor bike',
      status: 'completed',
    },
  ]);
  return (
    <View style={styles.container}>
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
          <View style={[styles.profilePicture, { marginTop: -80 }]}>
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
          <Divider style={styles.divider} />
          <View style={styles.takeActionView}>
            <CustomText style={styles.takeActionText}>
              YOUR SMALL STEPS MAKE GREAT CHANGE
            </CustomText>
          </View>
          <View style={styles.takeActionButtonView}>
            <ProfilePicture
              style={styles.bambooIcon}
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/take-action-left.png?alt=media&token=e2212e22-6deb-44f7-92bd-8af910bcf60f'
              }
            />
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
            <ProfilePicture
              style={styles.bambooIcon}
              uri={
                'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/take-action-right.png?alt=media&token=38a37f9d-1a6c-41c8-b40d-3bcdab9c3df2'
              }
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.addHabitsView}>
            <CustomText style={styles.takeActionText}>Add habits</CustomText>
            <TouchableWithoutFeedback
              onPress={() => console.log('Add habits icon')}
            >
              <View style={styles.addHabitsIcon}>
                <ProfilePicture
                  style={styles.plusIcon}
                  uri={
                    'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/plus-icon.png?alt=media&token=745b31b2-ed09-48ea-b27e-c7997d98b24a'
                  }
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.takeActionView}>
            <CustomText style={styles.habitsText}>My Habits</CustomText>
            <CustomText style={styles.habitsTextLight}>
              Log a habit everyday to complete your strike
            </CustomText>
          </View>
          <View style={styles.weekDays}>
            <Divider style={styles.bambooIcon} />
            <View style={styles.weekDays}>
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
            <Divider style={styles.bambooIcon} />
          </View>
          <ScrollView style={styles.cardsView}>
            {habits.map((habit) => (
              <TouchableWithoutFeedback
                onPress={() => console.log(`Card ${habit.id} pressed`)}
                key={habit.id}
              >
                <View style={[styles.innerCardView, { marginBottom: 20 }]}>
                  <ProfilePicture
                    style={styles.viewCardIcon}
                    uri={
                      'https://firebasestorage.googleapis.com/v0/b/task-force-93e06.appspot.com/o/take-action-left.png?alt=media&token=e2212e22-6deb-44f7-92bd-8af910bcf60f'
                    }
                  />
                  <View style={styles.viewCard}>
                    <View style={styles.cardPlateView}>
                      <Text style={styles.cardViewText}>{habit.title}</Text>
                      <View style={styles.cardPlateBottomDesign} />
                    </View>
                    <View style={styles.cardPlateIcon} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
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
    height: 150,
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
  takeActionView: {
    flex: 1,
    alignItems: 'center',
  },
  takeActionText: {
    color: colors.white,
    fontSize: 18,
  },
  takeActionButtonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    flex: 1 / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonImage: {
    width: 200,
    height: 50,
    borderRadius: 15,
  },
  bambooIcon: {
    flex: 1 / 4,
    width: 80,
    height: 50,
  },
  addHabitsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  addHabitsIcon: {
    flex: 1 / 4,
    width: 80,
    height: 40,
    backgroundColor: colors.green,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'flex-start',
  },
  plusIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  habitsText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  habitsTextLight: {
    color: colors.white,
  },
  weekDays: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardsView: {
    flex: 1,
    flexDirection: 'column',
  },
  innerCardView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewCard: {
    flex: 1,
    width: 200,
    height: 80,
    marginRight: 30,
    backgroundColor: colors.dark,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  viewCardIcon: {
    width: 120,
    height: 80,
    zIndex: 10,
  },
  cardPlateView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardPlateIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: colors.green,
    backgroundColor: colors.white,
  },
  cardViewText: {
    color: colors.white,
  },
  cardPlateBottomDesign: {
    backgroundColor: colors.dark,
    width: 80,
    height: 30,
    marginBottom: -40,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: colors.dark,
    shadowOffset: { width: 80, height: 30 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.dark,
  },
});

export default takeAction;
