import { Colors, Metrics } from '../../themes/'

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftButton: {
    paddingTop: Metrics.baseMargin
  },
  logo: {
    height: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    width: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    resizeMode: 'contain'
  },
  rightButton: {
    paddingTop: Metrics.baseMargin
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10
  },
  rightButtons: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}
