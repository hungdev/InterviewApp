import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../themes/'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center'
}

export default StyleSheet.create({
  container: {
    marginTop: 20
  },
  backButton: {
    ...navButton,
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin
  },
  searchButton: {
    ...navButton,
    // marginTop: Metrics.section,
    // marginRight: Metrics.baseMargin,
    alignItems: 'center'
  },
  navButtonLeft: {
    paddingLeft: Metrics.smallMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium
  },
  //
  warpAvatar: {
    paddingLeft: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: 100,
    width: 100,
    marginTop: Metrics.baseMargin,
    marginRight: Metrics.doubleBaseMargin
  },
  txtHi: {
    fontSize: 20,
    // color: Colors.green
  },
  warpContent: {
    padding: Metrics.baseMargin,
    paddingLeft: Metrics.searchBarHeight
  },
  warpButton: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.searchBarHeight,
  },
  iconItem: {
    marginRight: Metrics.baseMargin

  }
})
