import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import WithOrientation from '../components/extends/WithOrientation';
import styles from './styles/FinishExamScreenStyles';
import { Colors, Metrics } from '../themes';
import NavigationService from '../appNavigation/NavigationService'

class FinishExam extends WithOrientation {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Finish',
      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam('goAdmin')}
          style={{ marginRight: Metrics.doubleBaseMargin }}
        >
          <Text style={styles.txtGoAdmin}>Go to admin</Text>
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      adminPass: '',
      isWrongPass: false
    };
  }

  componentDidMount() {
    this.onSetLockToPortrait();
    this.props.navigation.setParams({ goAdmin: this.btnRightHeader });
  }

  btnRightHeader = () => {
    this.setState({ isModalVisible: true, isWrongPass: false, adminPass: '' })
  };

  onPressOkModal() {
    const { adminPass } = this.state;
    const { password } = this.props;
    if (adminPass === password) {
      this.setState({ isModalVisible: false, isWrongPass: false })
      NavigationService.reset('Home')
    } else this.setState({ isWrongPass: true })
  }

  render() {
    const { isModalVisible, adminPass, isWrongPass } = this.state;
    const { navigation } = this.props;
    const time = navigation.getParam('timeDoExam', '');
    return (
      <View style={styles.containerFinish}>
        <Text style={styles.txtFinish}>Bạn đã hoàn thành bài thi</Text>
        <Text style={styles.txtWithTime}>với thời gian: {time}</Text>
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
            <Text style={[styles.contentTitle, { fontSize: 25, marginBottom: 50, marginTop: 40 }]}>Go to Admin</Text>
            <Text style={styles.contentTitle}>Enter admin password to go to Admin dashboard</Text>
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
    password: state.auth.password,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // setInfoDoExam: (data) => dispatch(setInfoDoExam(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishExam)