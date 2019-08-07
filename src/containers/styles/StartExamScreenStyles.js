import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 10,
    color: Colors.white
  },
  txtLabelInput: {
    fontSize: Fonts.size.h3,
    marginTop: Metrics.screenHeight * 0.2,
    textAlign: 'center'
  },
  inputName: {
    borderWidth: 1,
    borderColor: Colors.borderInput,
    height: 50,
    width: '60%',
    alignSelf: 'center',
    marginTop: Metrics.doubleBaseMargin,
    borderRadius: Metrics.smallMargin,
    paddingLeft: Metrics.baseMargin
  },
  txtLabelPressStart: {
    marginTop: Metrics.screenHeight * 0.1,
    fontSize: Fonts.size.h3,
    textAlign: 'center'
  },
  btnStart: {
    borderWidth: 1,
    width: 150,
    height: 80,
    alignSelf: 'center',
    marginTop: Metrics.doubleBaseMargin,
    justifyContent: 'center',
    borderRadius: 5
  },
  txtStart: {
    fontSize: Fonts.size.h4,
    textAlign: 'center'
  },
  txtError: {
    color: Colors.fire,
    marginTop: Metrics.baseMargin,
    textAlign: 'center',
    fontSize: Fonts.size.input
  }
})