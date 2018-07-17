import { TestGradeEnum, TestItem, TestTypeEnum} from '.';

export class TestResults {
  type: TestTypeEnum;
  items: TestItem[];
  result: number;
  grade: TestGradeEnum;
}
