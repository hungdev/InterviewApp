import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 10,
    color: Colors.white
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    // borderWidth: 1,
    borderTopColor: Colors.divider,
    paddingLeft: Metrics.baseMargin,
    // borderBottomWidth: 1,
    padding: Metrics.paddingButton,  //15
    backgroundColor: Colors.card,  // '#FFFFFF'
    // borderWidth: 1,
    borderColor: Colors.borderGrey, // '#ccc'
    marginBottom: Metrics.smallMargin, // 5
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginBottom: Metrics.smallMargin,
  },
  txtContent: {
    fontSize: Fonts.size.input,
    alignSelf: 'center',
    paddingVertical: Metrics.searchBarHeight,
    flex: 1,
  },
  iconArrow: {
    marginRight: Metrics.doubleBaseMargin,
    alignSelf: 'center'
  }
})