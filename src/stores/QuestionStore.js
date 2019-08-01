// @flow

import { observable, action } from "mobx";
import { QuizType } from "@types";
import { vocabulary } from "@db";

function generateRandomInteger(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function generateTwoRandomInteger(min: number, max: number): Array<number> {
  const firstRandom = generateRandomInteger(min, max);
  if (min === max) {
    return [firstRandom];
  }

  let secondRandom = -1;
  do {
    secondRandom = generateRandomInteger(min, max);
  } while (firstRandom === secondRandom);

  return [firstRandom, secondRandom];
}

function UppercaseFirstCharacter(string: string): string {
  return string.replace(/^\w/, (char: string): string => char.toUpperCase());
}
class QuestionStore {
  @observable
  theme: string = "Business";

  @observable
  data: {} = {};

  @observable
  quiz: QuizType = {
    question: "",
    correctAnswer: "",
    answers: []
  };

  generateNoiseAnswer(): Array<string> {
    const otherThemes = Object.keys(this.data).filter(
      (key: string): boolean => key !== this.theme
    );

    const randomThemes = generateTwoRandomInteger(0, otherThemes.length - 1);
    if (randomThemes.length === 1) {
      const theme = otherThemes[randomThemes[0]];
      const randomWords = generateTwoRandomInteger(
        0,
        this.data[theme].length - 1
      );

      return [
        this.data[theme][randomWords[0]].id,
        this.data[theme][randomWords[1]].id
      ];
    }
    return randomThemes.map(
      (themeIndex: number): string => {
        const theme = otherThemes[themeIndex];
        const randomWord = generateRandomInteger(
          0,
          this.data[theme].length - 1
        );

        return this.data[theme][randomWord].id;
      }
    );
  }

  @action
  generateQuestion() {
    const themeVocabularies = this.data[this.theme];

    const randomWords = generateTwoRandomInteger(
      0,
      themeVocabularies.length - 1
    );

    const correctVocabulary = themeVocabularies[randomWords[0]];

    const noiseVocabulary = themeVocabularies[randomWords[1]];

    const answers = [correctVocabulary.id, noiseVocabulary.id].concat(
      this.generateNoiseAnswer()
    );

    const shuffleAnswers = answers
      .map((answer: string, index: number): number => index)
      .sort((): number => 0.5 - Math.random())
      .map((number: number): string => answers[number]);

    this.quiz = {
      question: `${correctVocabulary.type}\r\n${UppercaseFirstCharacter(
        correctVocabulary.description
      )}`,
      correctAnswer: correctVocabulary.id,
      answers: shuffleAnswers
    };
  }

  @action
  isCorrect(index: number): boolean {
    return this.quiz.answers[index] === this.quiz.correctAnswer;
  }

  constructor() {
    this.data = vocabulary;
  }
}

const store = new QuestionStore();

export default store;
