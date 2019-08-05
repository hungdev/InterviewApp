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
import NavigationService from '../appNavigation/NavigationService'
import question from './data/data'

const data = Array(50).fill().map((e, i) => ({ id: `${i + 1}` }));

class MainExamScreen extends WithOrientation {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.onSetLockToLandscape()
  }

  renderNumQuest(item) {
    return (
      <TouchableOpacity style={styles.btnNumQuest}>
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
            { id: 0, labelView: <View style={styles.warpMarkdown}><MarkdownRender>A. {item.a}</MarkdownRender></View> },
            { id: 1, labelView: <View style={styles.warpMarkdown}><MarkdownRender>B. {item.b}</MarkdownRender></View> },
            { id: 2, labelView: <View style={styles.warpMarkdown}><MarkdownRender>C. {item.c}</MarkdownRender></View> },
            { id: 3, labelView: <View style={styles.warpMarkdown}><MarkdownRender>D. {item.d}</MarkdownRender></View> },
          ]}
        // activeButtonId={0}
        />
      </View>
    )
  }

  onSubmit() {
    NavigationService.reset('FinishExam')
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

