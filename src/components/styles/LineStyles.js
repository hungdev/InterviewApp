import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  containerLine: {
    alignItems: 'center',
    alignContent: 'center',
  },
  dotLineCenter: {
    height: 7,
    width: 20,
    backgroundColor: Colors.mainColor,
    position: 'absolute',
    top: '35%',
    left: '45%',
    borderRadius: 2
  },
  dotLineStart: {
    height: 7,
    width: 20,
    backgroundColor: Colors.mainColor,
    position: 'absolute',
    top: '35%',
    left: 0,
    borderRadius: 2
  }
})