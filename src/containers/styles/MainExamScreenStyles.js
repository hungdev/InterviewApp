import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 10,
    color: Colors.white,
    flexDirection: 'row',
  },
  questionContainer: {
    flex: 2.5,
    marginBottom: Metrics.doubleBaseMargin
  },
  quizNavigation: {
    flex: 1,
    borderWidth: 1
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: Fonts.size.h4,
    marginTop: Metrics.baseMargin
  },
  contentQuizNum: {
    marginTop: Metrics.searchBarHeight
  },
  btnNumQuest: {
    flex: 1,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    margin: Metrics.smallMargin
  },
  txtNumQuest: {
    textAlign: 'center'
  },
  btnSubmit: {
    height: 50,
    width: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: Metrics.doubleSection,
    borderRadius: Metrics.smallMargin
  },
  //
  contentQuestion: {
    paddingLeft: Metrics.doubleBaseMargin,
    marginTop: Metrics.baseMargin,
    flex: 1,
  },
  txtLabelQuestionNumber: {
    fontSize: Fonts.size.h4,
    fontWeight: 'bold'
  },
  txtQuestion: {

  },
  warpMarkdown: {
    flex: 1,
    paddingRight: Metrics.doubleBaseMargin
  }

})