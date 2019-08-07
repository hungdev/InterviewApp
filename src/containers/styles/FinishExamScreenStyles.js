import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  containerFinish: {
    flex: 1,
    // paddingVertical: 10,
    color: Colors.white
  },
  txtFinish: {
    fontSize: Fonts.size.h1,
    textAlign: 'center',
    marginTop: Metrics.screenHeight * 0.3,
  },
  txtWithTime: {
    fontSize: Fonts.size.h3,
    textAlign: 'center',
    marginTop: Metrics.doubleBaseMargin
  },
  txtGoAdmin: {
    fontSize: Fonts.size.regular,
    // color: Colors.primaryColor
  },
  //modal
  content: {
    backgroundColor: 'white',
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: 'center'
  },
  input: {
    height: 50,
    width: '70%',
    borderWidth: 1,
    borderRadius: Metrics.smallMargin
  },
  rowButton: {
    flexDirection: 'row',
    marginTop: Metrics.plusDoubleSection,
    borderTopWidth: 1,
  },
  btnBottom: {
    // borderWidth: 1,
    flex: 1,
    height: 50,
    justifyContent: 'center'
  },
  txtBtnBottom: {
    textAlign: 'center'
  },
  txtLabelTextWrong: {
    color: Colors.fire,
    marginTop: Metrics.doubleBaseMargin
  }
})