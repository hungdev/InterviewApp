import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import WithOrientation from '../components/extends/WithOrientation';
import styles from './styles/FinishExamScreenStyles';
import { Colors, Metrics } from '../themes';
import { StackActions, NavigationActions } from 'react-navigation';
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
      isModalVisible: false
    };
  }

  componentDidMount() {
    this.onSetLockToPortrait();
    this.props.navigation.setParams({ goAdmin: this.btnRightHeader });
  }

  btnRightHeader = () => {
    this.setState({ isModalVisible: true })
  };

  onPressOkModal() {
    this.setState({ isModalVisible: false })
    NavigationService.reset('Home')
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={styles.containerFinish}>
        <Text style={styles.txtFinish}>Bạn đã hoàn thành bài thi</Text>
        <Text style={styles.txtWithTime}>với thời gian: 40p 25s</Text>
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
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
            <View style={styles.rowButton}>
              <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })} style={[styles.btnBottom, { borderRightWidth: 1 }]}>
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


// export default WithOrientation(FinishExam);
export default FinishExam