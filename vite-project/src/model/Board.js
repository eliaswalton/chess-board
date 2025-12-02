import { Piece } from "./Piece";

export function initBoard(){
    const B = Array.from({length: 8}, () => Array(8).fill(null));
    const order = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
    for (let i = 0; i < 8; i++) {
        B[0][i] = new Piece(order[i], 'b');
        B[1][i] = new Piece('p', 'b');
        B[6][i] = new Piece('b', 'w');
        B[7][i] = new Piece(order[i], 'w');
    }
    return B;
}