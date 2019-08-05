import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/HistoryScreenStyles';
import { Metrics } from '../themes';
import NavigationService from '../appNavigation/NavigationService'

const examList = [
  { id: 1, name: 'Thí sinh 1 - Ngày 10-7-2019' },
  { id: 2, name: 'Thí sinh 2 - Ngày 10-7-2019' },
  { id: 3, name: 'Thí sinh 3 - Ngày 10-7-2019' },
  { id: 4, name: 'Thí sinh 4 - Ngày 10-7-2019' },
  { id: 5, name: 'Thí sinh 5 - Ngày 10-7-2019' },
  { id: 6, name: 'Thí sinh 6 - Ngày 10-7-2019' },
  { id: 7, name: 'Thí sinh 7 - Ngày 10-7-2019' },
  { id: 8, name: 'Thí sinh 8 - Ngày 10-7-2019' },
  { id: 9, name: 'Thí sinh 9 - Ngày 10-7-2019' },
  { id: 10, name: 'Thí sinh 10 - Ngày 10-7-2019' },
]
class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History List',
  };

  renderItem(item) {
    return (
      <TouchableOpacity style={styles.rowContent} onPress={() => NavigationService.navigate('DetailHistory')}>
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

export default HistoryScreen;