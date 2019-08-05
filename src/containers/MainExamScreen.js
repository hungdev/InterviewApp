//https://reactnavigation.org/docs/en/function-after-focusing-screen.html
import React, { Component } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import WithOrientation from '../components/extends/WithOrientation';
import { NavigationEvents, ScrollView } from 'react-navigation';
import styles from './styles/MainExamScreenStyles'
import Markdown from 'react-native-simple-markdown'
import MarkdownRender from 'react-native-markdown-renderer';
import Reactotron from 'reactotron-react-native'
import RadioGroup from 'react-native-radio-button-group'
import _ from 'lodash'
import NavigationService from '../appNavigation/NavigationService'
import question from './data/data'

const data = Array(question.length).fill().map((e, i) => ({ id: `${i + 1}` }));

class MainExamScreen extends WithOrientation {
  constructor(props) {
    super(props);
    this.state = {
      questionSelected: []
    };
  }

  componentDidMount() {
    this.onSetLockToLandscape()
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
    NavigationService.reset('FinishExam')
  }

  render() {
    const { questionSelected } = this.state;
    console.log('questionSelected', questionSelected)
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

export default MainExamScreen

