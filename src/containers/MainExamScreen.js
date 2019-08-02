import React, { Component } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import WithOrientation from '../components/extends/WithOrientation';
import { NavigationEvents, ScrollView } from 'react-navigation';
import styles from './styles/MainExamScreenStyles'
import Markdown from 'react-native-simple-markdown'
import MarkdownRender from 'react-native-markdown-renderer';
import Reactotron from 'reactotron-react-native'
import RadioGroup from 'react-native-radio-button-group'
import { Metrics } from '../themes';
import NavigationService from '../appNavigation/NavigationService'

const data = Array(50).fill().map((e, i) => ({ id: `${i + 1}` }));

const question = [
  {
    id: 1,
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: 2,
    question: `
    #Markdown in react-native is so cool! {'\n\n'}
      You can **emphasize** what you want, or just _suggest it_ 😏…{'\n'}
      You can even [**link your website**](https://twitter.com/Charles_Mangwa) or if you prefer: [email somebody](mailto:email@somebody.com){'\n'}
      Spice it up with some GIFs 💃:
      ![Some GIF](https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif){'\n'}
      And even add a cool video 😎!{'\n'}

      [![A cool video from YT](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)

      [![Another one from Vimeo](https://i.vimeocdn.com/video/399486266_640.jpg)](https://vimeo.com/57580368)
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: 3,
    question: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry \n
    var foo = function (bar) {
      return bar++;
    };
    
    console.log(foo(5));
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: 4,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  }
]
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

