import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 10,
    color: Colors.white,
    paddingTop: Metrics.baseMargin
  },
  warpLogo: {
    backgroundColor: Colors.grey,
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center'
  },
  rowContent: {
    paddingVertical: Metrics.searchBarHeight,
    borderWidth: 1,
    borderTopColor: Colors.divider,
    paddingLeft: Metrics.baseMargin,
    // borderBottomWidth: 1,
    padding: Metrics.paddingButton,  //15
    backgroundColor: Colors.card,  // '#FFFFFF'
    borderWidth: 1,
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
    marginBottom: Metrics.smallMargin
  },
  txtContent: {
    fontSize: Fonts.size.input,
  },
})