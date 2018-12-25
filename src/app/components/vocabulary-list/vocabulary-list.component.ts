import { Component, OnInit } from '@angular/core';
import { Test, TestItem, Vocabulary } from '../../models';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html'
})
export class VocabularyListComponent implements OnInit {
  constructor() { }

  list: Vocabulary[];

  ngOnInit(): void {
    
  }
}
