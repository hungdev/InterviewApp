import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
import { Colors, Metrics, Fonts } from '../themes/';

import HomeScreen from '../containers/HomeScreen'
import ExamKitListScreen from '../containers/ExamKitListScreen'
import StartExamScreen from '../containers/StartExamScreen'
import MainExamScreen from '../containers/MainExamScreen'
import FinishExamScreen from '../containers/FinishExamScreen'
import DetailHistoryScreen from '../containers/DetailHistoryScreen'
import DetailResultScreen from '../containers/DetailResultScreen'
import HistoryScreen from '../containers/HistoryScreen'
import DetailScreen from '../containers/DetailScreen'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    ExamKitList: ExamKitListScreen,
    StartExam: StartExamScreen,
    MainExam: MainExamScreen,
    FinishExam: FinishExamScreen,
    DetailResult: DetailResultScreen,
    Details: DetailScreen,
    History: HistoryScreen,
    DetailHistory: DetailHistoryScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      // headerStyle: {
      //   // backgroundColor: Colors.white,
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    },
  }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;