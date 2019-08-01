// @flow

import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import autobind from "autobind-decorator";
import { observer } from "mobx-react";
import Tts from "react-native-tts";
import { Icon, Text } from "@components";
import { getColor } from "@themes";
import { QuestionStore } from "@stores";

type PropsType = {
  navigation: NavigationScreenProps
};

type StateType = {
  selectedIndex: number,
  isCheckAnswer: boolean
};

@observer
class QuizScreen extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      selectedIndex: -1,
      isCheckAnswer: false
    };
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage("en-US");
      Tts.setDefaultRate(0.4);
    });
  }

  componentDidMount() {
    QuestionStore.generateQuestion();
  }

  @autobind
  onSelectAnswer(index: number) {
    const { selectedIndex, isCheckAnswer } = this.state;
    const {
      quiz: { correctAnswer, answers }
    } = QuestionStore;
    if (selectedIndex < 0) {
      this.setState({ selectedIndex: index }, () => {
        if (this.timeout) {
          clearTimeout(this.timerHandle);
        }
        this.timeout = setTimeout(() => {
          this.setState({
            isCheckAnswer: true
          });
        }, 1000);
      });
    }
    if (isCheckAnswer) {
      if (correctAnswer === answers[index]) {
        Tts.speak(correctAnswer);
      }
    }
  }

  @autobind
  nextQuestion() {
    QuestionStore.generateQuestion();
    this.setState({
      selectedIndex: -1,
      isCheckAnswer: false
    });
  }

  @autobind
  getBackgroundColor(index: number): string {
    const { selectedIndex, isCheckAnswer } = this.state;
    const {
      quiz: { correctAnswer, answers }
    } = QuestionStore;

    if (isCheckAnswer) {
      if (correctAnswer === answers[index]) {
        return getColor("sc200");
      }
      if (index === selectedIndex) {
        return getColor("error");
      }
    }
    if (selectedIndex === index) {
      return getColor("pr200");
    }

    return getColor("white");
  }

  @autobind
  renderAnswers(): React.Node {
    const {
      quiz: { answers }
    } = QuestionStore;

    const { selectedIndex } = this.state;

    const textColor = selectedIndex >= 0 ? "white" : "black";

    return answers.map(
      (answer: string, index: number): React.Node => {
        const backgroundColor = this.getBackgroundColor(index);
        return (
          <TouchableOpacity
            key={`answer-${index}`}
            style={[styles.answerContainer, { backgroundColor }]}
            onPress={() => {
              this.onSelectAnswer(index);
            }}
          >
            <Text type="display" color={textColor}>
              {answer}
            </Text>
          </TouchableOpacity>
        );
      }
    );
  }

  render(): React.Node {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.icButton}>
            <Text color="white">{"<"}</Text>
          </View>
          <View style={styles.headerTitle}>
            <Text color="white" type="title">
              {`Theme: ${QuestionStore.theme}`}
            </Text>
          </View>
          <TouchableOpacity style={styles.icButton} onPress={this.nextQuestion}>
            <Text color="white" type="button">
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <Text color="onSf" type="display" style={styles.questionLbl}>
          Question :
        </Text>
        <View style={styles.quizQuestionsContainer}>
          <Text type="display" color="white">
            {QuestionStore.quiz.question}
          </Text>
        </View>
        <View style={styles.quizAnswersContainer}>{this.renderAnswers()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor("bg")
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: getColor("sf"),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 7
  },
  icButton: {
    height: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitle: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    overflow: "hidden"
  },
  questionLbl: {
    paddingLeft: 20
  },
  quizQuestionsContainer: {
    width: "100%",
    height: 200,
    marginTop: 15,
    backgroundColor: getColor("sf"),
    justifyContent: "center",
    padding: 20,
    paddingTop: 5
  },
  quizAnswersContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between"
  },
  answerContainer: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: getColor("white"),
    justifyContent: "center",
    alignItems: "center"
  }
});

export default QuizScreen;
