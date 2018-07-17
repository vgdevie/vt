import { TestAnswer } from ".";

export class TestItem {
  imageUrl: string;
  value: string;
  translation: string;
  answers: TestAnswer[];
  correctPicked: boolean;
}
