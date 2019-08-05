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
    return (
      <View style={styles.container}>
        <Text style={styles.examineeName}>Thí sinh: ABC</Text>
        <Text style={styles.rowDetail}>Làm bài lúc: 2h 35p</Text>
        <Text style={styles.rowDetail}>Thời gian làm bài: 40p</Text>
        <Text style={styles.rowDetail}>Tổng số câu đúng: 45 câu</Text>
        <Text style={styles.rowDetail}>Tổng số câu sai: 5 câu</Text>
        <Text style={styles.rowDetail}>Số câu Js đúng: 20 câu</Text>
        <Text style={styles.rowDetail}>Số câu HTML/CSS sai: 5 câu</Text>
      </View>
    );
  }
}

export default DetailHistory;