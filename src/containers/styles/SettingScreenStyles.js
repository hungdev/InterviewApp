import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes';

export default StyleSheet.create({
  containerMain: {
    marginTop: 20,
    backgroundColor: Colors.background,
    flex: 1
  },
  cardView: {
    marginBottom: Metrics.baseMargin
  },
  warpAction: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtLateAction: {
    padding: 10,
    borderRadius: 10
  },
  rowTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnTime: {
    borderWidth: 1,
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  rowChannel: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  warpChannelText: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }

})