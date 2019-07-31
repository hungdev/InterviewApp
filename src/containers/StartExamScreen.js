import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styles/StartExamScreenStyles';

class StartExamScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
  };
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onStartPress() {
    this.props.navigation.navigate('MainExam')
  }

  render() {
    return (
      <View style={styles.container}>
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

export default StartExamScreen;