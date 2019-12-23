import { Injectable } from '@angular/core';
import { COLS, ROWS } from "./constants";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }
}
