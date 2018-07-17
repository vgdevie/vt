import { Vocabulary, TestItem, TestTypeEnum } from '.';

export class Test {
  type: TestTypeEnum;
  voca: Vocabulary;
  items: TestItem[];
}
