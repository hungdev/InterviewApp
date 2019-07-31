import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

class ChooseSkodaScreen extends React.Component {
  static navigationOptions = {
    title: '10: 25',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ChooseSkodaScreen!</Text>
      </View>
    );
  }
}

export default ChooseSkodaScreen;