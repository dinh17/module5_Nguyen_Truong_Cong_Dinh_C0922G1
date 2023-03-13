import { Injectable } from '@angular/core';
import {IWord} from "../model/i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {
      word: 'avocado',
      mean: 'Quả bơ'
    },
    {
      word: 'watermelon',
      mean: 'Quả dưa hấu'
    },
    {
      word: 'peach',
      mean: 'Quả đào'
    },
    {
      word: 'persimmon',
      mean: 'Quả hồng'
    },
    {
      word: 'retribution',
      mean: 'Quả báo :)))'
    },
  ];

  constructor() { }
  findAll() {
    return this.words;
  }

  translate(word: string | null): string {
    if (!word) {
      return '';
    }
    const wordTranslate = this.words.find(item => item.word === word.toLowerCase());
    if (wordTranslate) {
      return wordTranslate.mean;
    }
    return 'Not found';
  }
}
