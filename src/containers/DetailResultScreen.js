import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import {
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ChooseSkodaScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (

      <Icon name="schedule" size={25} style={{ color: tintColor }} />
    )
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ChooseSkodaScreen!</Text>
      </View>
    );
  }
}

export default ChooseSkodaScreen;