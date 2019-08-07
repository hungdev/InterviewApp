import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/SettingScreenStyles'
import { Metrics } from '../themes';
import NavigationService from '../appNavigation/NavigationService'
import { setPassword } from '../actions/authAction'
import Modal from "react-native-modal";

class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      adminPass: '',
      isWrongPass: false
    };
  }

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

  onPressOkModal() {
    const { adminPass } = this.state
    this.props.setPassword(adminPass)
    this.setState({ isModalVisible: false })
  }

  render() {
    const { isModalVisible, adminPass, isWrongPass } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.rowContent} onPress={() => this.removeHistory()}>
          <Text style={styles.txtContent}>Xóa dữ liệu thí sinh đã thi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContent} onPress={() => this.setState({ isModalVisible: true })}>
          <Text style={styles.txtContent}>Đổi password admin</Text>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          swipeDirection="left"
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
        >
          <View style={styles.content}>
            <Text style={[styles.contentTitle, { fontSize: 25, marginBottom: 50, marginTop: 40 }]}>Change Admin password</Text>
            <Text style={styles.contentTitle}>Enter new admin password </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ adminPass: text, isWrongPass: false })}
              value={adminPass}
            />
            {isWrongPass && <Text style={styles.txtLabelTextWrong}>Password is wrong!!!</Text>}
            <View style={styles.rowButton}>
              <TouchableOpacity
                style={[styles.btnBottom, { borderRightWidth: 1 }]}
                onPress={() => this.setState({ isModalVisible: false, isWrongPass: false })}
              >
                <Text style={styles.txtBtnBottom}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnBottom} onPress={() => this.onPressOkModal()}>
                <Text style={styles.txtBtnBottom}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    setPassword: (data) => dispatch(setPassword(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)