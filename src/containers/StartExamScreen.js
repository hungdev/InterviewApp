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

class StartExamScreen extends WithOrientation {
  static navigationOptions = {
    title: 'Start',
  };
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    this.onSetLockToPortrait()
  }

  onStartPress() {
    NavigationService.reset('MainExam')
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() => this.onSetLockToPortrait()}
        />
        <Text style={styles.txtLabelInput}>Nhập tên thí sinh</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder='Nhập tên của bạn...'
        />
        <Text style={styles.txtLabelPressStart}>Nhấn start để bắt đầu làm bài.</Text>
        <Text style={[styles.txtLabelPressStart, { marginTop: 10 }]}>Thời gian làm bài sẽ được tính khi ấn start</Text>
        <TouchableOpacity style={styles.btnStart} onPress={() => this.onStartPress()}>
          <Text style={styles.txtStart}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StartExamScreen