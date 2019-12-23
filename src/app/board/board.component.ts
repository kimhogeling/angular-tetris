import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { BoardService } from "../board.service";
import { BLOCK_SIZE, COLS, ROWS } from "../constants";
import { Piece } from "./piece";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;
  points: number;
  lines: number;
  level: number;

  board: number[][];
  private piece: Piece;

  constructor(private boardService: BoardService) {}

  ngOnInit() {
    this.initBoard();
  }

  initBoard() {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;

    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  play() {
    this.board = this.boardService.getEmptyBoard();
    this.piece = new Piece(this.ctx);
    this.piece.draw();

    console.table(this.board);
  }

}
