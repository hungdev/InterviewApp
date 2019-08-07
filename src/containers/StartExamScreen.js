import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import WithOrientation from '../components/extends/WithOrientation';
import styles from './styles/StartExamScreenStyles';
import { NavigationEvents } from 'react-navigation';
import NavigationService from '../appNavigation/NavigationService'
import moment from 'moment'
import { Colors } from '../themes';

class StartExamScreen extends WithOrientation {
  static navigationOptions = {
    title: 'Start',
  };
  constructor(props) {
    super(props);
    this.state = { name: '', isError: false };
  }

  componentDidMount() {
    this.onSetLockToPortrait()
  }

  onStartPress() {
    const { name } = this.state;
    if (name) {
      NavigationService.reset('MainExam', { timeStart: moment().format('YYYY-MM-DD HH:mm:ss'), name })
    } else {
      this.setState({ isError: true })
    }
  }

  render() {
    const { name, isError } = this.state;
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() => this.onSetLockToPortrait()}
        />
        <Text style={styles.txtLabelInput}>Nhập tên thí sinh</Text>
        <TextInput
          style={[styles.inputName, isError && { borderColor: Colors.fire }]}
          onChangeText={(text) => this.setState({ name: text, isError: false })}
          value={name}
          placeholder='Nhập tên của bạn...'
        />
        {isError && <Text style={styles.txtError}>Bạn chưa nhập tên kìa</Text>}
        <Text style={styles.txtLabelPressStart}>Nhấn start để bắt đầu làm bài.</Text>
        <Text style={[styles.txtLabelPressStart, { marginTop: 10 }]}>Thời gian làm bài sẽ được tính khi ấn start</Text>
        <TouchableOpacity style={styles.btnStart} onPress={() => this.onStartPress()}>
          <Text style={styles.txtStart}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StartExamScreen;