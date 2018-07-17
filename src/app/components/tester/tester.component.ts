import { Component, OnInit } from '@angular/core';
import { Test, TestItem } from '../../models';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html'
})
export class TesterComponent implements OnInit {
  constructor() { }

  model: Test;
  current: TestItem;

  ngOnInit(): void {
  }
}
