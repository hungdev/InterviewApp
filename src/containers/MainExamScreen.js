//https://reactnavigation.org/docs/en/function-after-focusing-screen.html
import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import WithOrientation from '../components/extends/WithOrientation';
import { connect } from 'react-redux';
import { NavigationEvents, ScrollView } from 'react-navigation';
import styles from './styles/MainExamScreenStyles'
import Markdown from 'react-native-simple-markdown'
import MarkdownRender from 'react-native-markdown-renderer';
import { setInfoDoExam } from '../actions/questionAction'
import RadioGroup from 'react-native-radio-button-group'
import _ from 'lodash'
import NavigationService from '../appNavigation/NavigationService'
import HeaderTimer from '../components/HeaderExamTimer'
import moment from 'moment'
import question from './data/data'
import uuidv4 from 'uuid/v4'

const data = Array(question.length).fill().map((e, i) => ({ id: `${i + 1}` }));

class MainExamScreen extends WithOrientation {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle:
        <HeaderTimer
          time={_.get(navigation, 'state.params.time', '45:00')}
          runningOutOfTime={_.get(navigation, 'state.params.runningOutOfTime', false)} />,
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      questionSelected: [],
      counter: 2700,  // 45 mins
    };
  }

  componentDidMount() {
    this.onSetLockToLandscape()
    this.interval = setInterval(() => {
      let time = moment().hour(0).minute(0).second(this.state.counter).format('mm:ss')
      if (this.state.counter === 120) {
        this.props.navigation.setParams({ runningOutOfTime: true })
      }
      this.setState({ counter: this.state.counter - 1, time })
      this.props.navigation.setParams({ time })
      if (this.state.counter === 0) {
        this.onSubmit()
        return
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  scrollToIndex(id) {
    this.flatListRef.scrollToIndex({ animated: true, index: id - 1 });
  }

  renderNumQuest(item) {
    return (
      <TouchableOpacity style={styles.btnNumQuest} onPress={() => this.scrollToIndex(item.id)}>
        <Text style={styles.txtNumQuest}>{item.id}</Text>
      </TouchableOpacity>
    )
  }

  renderQuestion(item) {
    return (
      <View style={styles.contentQuestion}>
        <Text style={styles.txtLabelQuestionNumber}>Câu: {item.id}</Text>
        <MarkdownRender styles={styles.txtQuestion}>{item.question}</MarkdownRender>
        <RadioGroup
          options={[
            { id: 'a', labelView: <View style={styles.warpMarkdown}><MarkdownRender>A. {item.a}</MarkdownRender></View> },
            { id: 'b', labelView: <View style={styles.warpMarkdown}><MarkdownRender>B. {item.b}</MarkdownRender></View> },
            { id: 'c', labelView: <View style={styles.warpMarkdown}><MarkdownRender>C. {item.c}</MarkdownRender></View> },
            { id: 'd', labelView: <View style={styles.warpMarkdown}><MarkdownRender>D. {item.d}</MarkdownRender></View> },
          ]}
          // activeButtonId={0}
          onChange={(option) => this.onChangeQuestionSelected(option, item)}
        />
      </View>
    )
  }

  onChangeQuestionSelected(option, item) {
    const { questionSelected } = this.state;
    this.setState({ questionSelected: _.uniqBy([{ id: item.id, answer: option.id, category: item.category }, ...questionSelected], 'id') })
  }

  onSubmit() {
    const { questionSelected, counter } = this.state;
    const { navigation } = this.props;
    const timeStart = navigation.getParam('timeStart', '');
    const name = navigation.getParam('name', '');
    const timeDoExam = moment().hour(0).minute(0).second(2700 - counter).format('mm:ss')
    clearInterval(this.interval);
    const numberTrueAnswer = _.filter(question, quest => _.find(questionSelected, asw => asw.id === quest.id && asw.answer === quest.answer))
    const totalTrueAnsQuestion = `Tổng số câu đúng ${numberTrueAnswer.length} trên tổng số ${question.length}`
    const totalFalseAnsQuestion = `Tổng số câu sai ${question.length - numberTrueAnswer.length} trên tổng số ${question.length}`
    const categoryList = _.uniq(_.map(question, e => e.category))
    const categoryDetails = _.map(categoryList, (val, key) =>
      `Số câu ${val} đúng là: ${_.filter(numberTrueAnswer, e => e.category === val).length} trên tổng số ${_.filter(question, e => e.category === val).length} câu ${val}`
    )
    const answerDetails = [totalTrueAnsQuestion, totalFalseAnsQuestion, ...categoryDetails]
    this.props.setInfoDoExam({ questionSelected, timeDoExam, timeStart, name, id: uuidv4(), answerDetails })
    NavigationService.reset('FinishExam', { timeDoExam })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() => this.onSetLockToLandscape()}
        />
        <View style={styles.questionContainer}>
          <FlatList
            data={question}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => this.renderQuestion(item)}
            initialNumToRender={2}
            ref={(ref) => { this.flatListRef = ref; }}
          />
        </View>
        <ScrollView style={styles.quizNavigation}>
          <Text style={styles.txtTitle}>Quiz Navigation</Text>
          <View style={styles.contentQuizNum}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => this.renderNumQuest(item)}
              numColumns={5}
            />
            <TouchableOpacity style={styles.btnSubmit} onPress={() => this.onSubmit()}>
              <Text>Nộp bài</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    setInfoDoExam: (data) => dispatch(setInfoDoExam(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainExamScreen)