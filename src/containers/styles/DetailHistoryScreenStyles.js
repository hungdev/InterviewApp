import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 10,
    color: Colors.white,
    padding: '5%',
  },
  examineeName: {
    fontSize: Fonts.size.h2
  },
  rowDetail: {
    fontSize: Fonts.size.regular,
    marginVertical: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border
  },
  userName: {
    borderBottomWidth: 1,
    marginBottom: Metrics.doubleBaseMargin
  },
  txtTime: {
    marginTop: Metrics.doubleBaseMargin,
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
  },
  timeHeader: {
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  }
})