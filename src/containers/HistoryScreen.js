import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/HistoryScreenStyles';
import { Metrics } from '../themes';
import NavigationService from '../appNavigation/NavigationService'

class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History List',
  };

  renderItem(item) {
    return (
      <TouchableOpacity style={styles.rowContent} onPress={() => NavigationService.navigate('DetailHistory', { user: item })}>
        <Text style={styles.txtContent}>{item.name} - {item.timeStart}</Text>
        <Ionicons name='md-arrow-dropright' size={40} style={styles.iconArrow} />
      </TouchableOpacity>
    )
  }

  render() {
    const { infoDoExam } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={infoDoExam}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    infoDoExam: state.question.infoDoExam,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // setInfoDoExam: (data) => dispatch(setInfoDoExam(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)