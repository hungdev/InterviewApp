import React, { Component } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import withOrientation from '../components/hoc/withOrientation';
import styles from './styles/MainExamScreenStyles'

class MainExamScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.onSetLockToLandscape()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <FlatList
            data={[{ key: 'a' }, { key: 'b' }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
        <View style={styles.quizNavigation}>
          <Text>ok</Text>
        </View>
      </View>
    );
  }
}

export default withOrientation(MainExamScreen)

