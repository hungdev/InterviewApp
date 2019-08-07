import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import styles from './styles/DetailHistoryScreenStyles';


class DetailHistory extends React.Component {

  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user', '');
    return (
      <View style={styles.container}>
        <View style={styles.userName}>
          <Text style={styles.examineeName}>Thí sinh: {user && user.name}</Text>
        </View>
        <View style={styles.timeHeader}>
          <Text style={styles.txtTime}>Time:</Text>
          <Text style={styles.rowDetail}>Làm bài lúc: {user && user.timeStart}</Text>
          <Text style={styles.rowDetail}>Thời gian làm bài: {user && user.timeDoExam}</Text>
        </View>
        <View style={[styles.timeHeader, { borderBottomWidth: 0 }]}>
          <Text style={styles.txtTime}>Exam Details:</Text>
          {user && user.answerDetails && user.answerDetails.map((e, i) => <Text key={i} style={styles.rowDetail}>{e}</Text>)}
        </View>
      </View>
    );
  }
}

export default DetailHistory;