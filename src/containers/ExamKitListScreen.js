import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/ExamKitListScreenStyles';
import { Metrics } from '../themes';

const examList = [
  { id: 1, name: 'Bộ đề 1' },
  { id: 2, name: 'Bộ đề 2' },
  { id: 3, name: 'Bộ đề 3' },
  { id: 4, name: 'Bộ đề 4' },
  { id: 5, name: 'Bộ đề 5' },
  { id: 6, name: 'Bộ đề 6' },
  { id: 7, name: 'Bộ đề 7' },
  { id: 8, name: 'Bộ đề 8' },
  { id: 9, name: 'Bộ đề 9' },
  { id: 10, name: 'Bộ đề 10' },
]
class ExamKitListScreen extends React.Component {
  static navigationOptions = {
    title: 'Exam Kit List',
  };

  renderItem(item) {
    return (
      <TouchableOpacity style={styles.rowContent} onPress={() => this.props.navigation.navigate('StartExam')}>
        <Text style={styles.txtContent}>{item.name}</Text>
        <Ionicons name='md-arrow-dropright' size={40} style={styles.iconArrow} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={examList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default ExamKitListScreen;