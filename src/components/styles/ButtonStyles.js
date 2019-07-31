import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.mainColor,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center'
  }
})