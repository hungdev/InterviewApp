import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Images } from '../themes';

class About extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (

      <Icon name="schedule" size={25} style={{ color: tintColor }} />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Version: <Text style={{ color: 'red' }}>1.0.0</Text></Text>
        <Text>Develop: <Text style={{ color: 'green' }}>Cee</Text></Text>
        <Text style={{ marginTop: 20 }}>Lười biếng là gốc rễ của sự thông minh</Text>
        <Image source={Images.explodingKittens} style={styles.imgkit} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  imgkit: {
    resizeMode: 'contain',
    width: '110%'
  }
});

export default About;