import { Vocabulary, TestItem, TestResults, Word, TestAnswer, TestGradeEnum } from "../models";
import { CommonHelper } from "./common.helper";

export class TestHelper {
  _commonHelper = new CommonHelper();

  /**
   * Generate test items from vocabulary
   * @param voca Vocabulary
   */
  public generateTestItems(words: Word[], answerWords: Word[], maxAnswerCount: number = 5): TestItem[] {
    let testItems = [];

    if (!words || words.length < 2) {
      throw new Error("There must be at least 2 words to generate test items");
    }

    let shuffledWords = this._commonHelper.shuffle(words);

    for (let word of shuffledWords) {
      let testItem = new TestItem();
      testItem.imageUrl = word.thumbnailUrl;
      testItem.value = word.value;
      testItem.translation = word.translation;
      testItem.answers = this.generateAnswers(word, answerWords, maxAnswerCount);
      testItems.push(testItem);
    }

    return testItems;
  }

  /**
   * Generates test item answers
   * @param word Word - correct Answer;
   * @param words Vocabulary words ans wrong answers;
   */
  private generateAnswers(word: Word, words: Word[], maxAnswerCount: number): TestAnswer[] {
    let answers = [];
    answers.push(new TestAnswer(word.value, word.translation, true));

    let shuffledWords = this._commonHelper.shuffle(words);

    if (words.includes(word)) {
      shuffledWords.splice(shuffledWords.indexOf(word));
    }

    for (let sword of shuffledWords) {
      answers.push(new TestAnswer(sword.value, sword.translation, false));
      if (answers.length === 5) {
        break;
      }
    }

    return this._commonHelper.shuffle(answers);
  }

  /**
   * Generates test results from test items
   * @param testItems Test Items array
   */
  public generateTestResults(testItems: TestItem[]): TestResults {
    let testResults = new TestResults();
    testResults.items = testItems;

    let correctAnswersCount = 0;

    for (let testItem of testItems) {
      for (let answer of testItem.answers) {
        if (answer.correct && answer.picked) {
          testItem.correctPicked = true;
          correctAnswersCount++;
        }
      }
    }

    testResults.result = (correctAnswersCount / testItems.length) * 100;
    testResults.grade = this.getGrade(testResults.result);

    return testResults;
  }

  /**
   * Get Grade
   * @param result Percent of correct answers
   */
  private getGrade(result: number): TestGradeEnum {
    if (result === 100) {
      return TestGradeEnum.Excellent;
    } else if (result >= 90) {
      return TestGradeEnum.VeryGood;
    } else if (result >= 70) {
      return TestGradeEnum.Good;
    } else if (result >= 60) {
      return TestGradeEnum.Pass;
    } else {
      return TestGradeEnum.Fail;
    }
  }
}
