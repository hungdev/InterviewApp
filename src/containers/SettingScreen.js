import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/HomeScreenStyles'
import { Metrics } from '../themes';
import NavigationService from '../appNavigation/NavigationService'
import { removeInfoDoExam } from '../actions/questionAction'

class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
  };

  removeHistory() {
    Alert.alert(
      'Chú ý',
      'Bạn có muốn xóa dữ liệu lịch sử thí sinh?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => this.props.removeInfoDoExam() },
      ],
      { cancelable: false },
    );

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.rowContent} onPress={() => this.removeHistory()}>
          <Text style={styles.txtContent}>Xóa dữ liệu thí sinh đã thi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContent} onPress={() => this.onNavigate('History')}>
          <Text style={styles.txtContent}>Đổi password admin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeInfoDoExam: (data) => dispatch(removeInfoDoExam(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)