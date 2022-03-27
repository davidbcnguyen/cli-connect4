import Prompt from "prompt-sync";
import Board from "./Board.js";

const prompt = Prompt({ sigint: true });
const players = ["O", "X"];
export default class Game {
    board;
    turn;
    
    constructor() {
        this.board = new Board(6, 7, 4);
        this.turn = 0;
    }

    play() {
        while (!this.board.isOver) {
            let column;
            do {
                this.board.print(1);
                column = prompt(`Player ${this.turn + 1}: `);
            } while (!isNaN(Number(column)) && !this.board.move(players[this.turn], Number(column) - 1));
            this.turn = (this.turn + 1) % players.length;
        }
        this.board.print(1);
        console.log(`${players[(this.turn + 1) % players.length]} wins!`);
    }
}