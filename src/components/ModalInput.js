/**
 * Example usage of react-native-modal
 * @format
 */

import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import Modal from "react-native-modal";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      data: {}
    };
  }


  onShow(data) {
    this.setState({ visibleModal: true, data })
  }
  onClose() {
    this.setState({ visibleModal: false })
  }

  onPressOk() {
    const { onPressOk } = this.props
    if (onPressOk) onPressOk(this.state.data)
    this.onClose()
  }

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({ data: { ...this.state.data, mess: text } })}
        value={this.state.data.mess}
        multiline
      />
      <View style={styles.rowButton}>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ visibleModal: false })}>
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPressOk()}>
          <Text>Oke</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    const { visibleModal } = this.state
    return (
      <View style={styles.container}>
        <Modal
          isVisible={visibleModal}
          backdropColor={'rgba(0, 0, 0, 0.8)'}
          backdropOpacity={1}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    marginHorizontal: 16,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: 80
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  input: {
    height: 40, borderColor: 'gray', borderWidth: 1, width: '100%',
    height: 150,
    textAlignVertical: 'top',
    borderRadius: 5
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
});
