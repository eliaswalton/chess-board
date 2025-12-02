import { initBoard } from "./Board";
import { Stack } from "./Stack";
export class Game {
    constructor() {
        this.board = initBoard();
        this.turn = 'w';
        this.history = [];
        this.undoStack = new Stack();
    }

    getPiece(pos) {
        return this.board[pos.r][pos.c];
    }
    setPiece(pos, p) {
        this.board[pos.r][pos.c] = p;
    }
}