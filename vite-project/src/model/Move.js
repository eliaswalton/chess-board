
export class Move {
  constructor(from, to, piece, captured=null, special=null) {
    this.from = from;this.to = to;this.piece = piece;this.captured = captured;this.special = special;
  }
}
