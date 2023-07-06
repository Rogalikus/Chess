import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); //Чорні ячейкі
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // Білі
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[x][y];
  }

  public addFigures() {
    new Queen(Colors.WHITE, this.getCell(7, 3));
    new Queen(Colors.BLACK, this.getCell(0, 3));
    new Rook(Colors.WHITE, this.getCell(7, 0));
    new Rook(Colors.BLACK, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Knight(Colors.WHITE, this.getCell(7, 1));
    new Knight(Colors.BLACK, this.getCell(0, 6));
    new Knight(Colors.WHITE, this.getCell(7, 6));
    new Knight(Colors.BLACK, this.getCell(0, 1));
    new Bishop(Colors.WHITE, this.getCell(7, 2));
    new Bishop(Colors.WHITE, this.getCell(7, 5));
    new Bishop(Colors.BLACK, this.getCell(0, 5));
    new Bishop(Colors.BLACK, this.getCell(0, 2));
    new King(Colors.BLACK, this.getCell(7, 4));
    new King(Colors.WHITE, this.getCell(0, 4));
    new Pawn(Colors.WHITE, this.getCell(6, 0));
    new Pawn(Colors.WHITE, this.getCell(6, 1));
    new Pawn(Colors.WHITE, this.getCell(6, 2));
    new Pawn(Colors.WHITE, this.getCell(6, 3));
    new Pawn(Colors.WHITE, this.getCell(6, 4));
    new Pawn(Colors.WHITE, this.getCell(6, 5));
    new Pawn(Colors.WHITE, this.getCell(6, 6));
    new Pawn(Colors.WHITE, this.getCell(6, 7));
    new Pawn(Colors.BLACK, this.getCell(1, 0));
    new Pawn(Colors.BLACK, this.getCell(1, 1));
    new Pawn(Colors.BLACK, this.getCell(1, 2));
    new Pawn(Colors.BLACK, this.getCell(1, 3));
    new Pawn(Colors.BLACK, this.getCell(1, 4));
    new Pawn(Colors.BLACK, this.getCell(1, 5));
    new Pawn(Colors.BLACK, this.getCell(1, 6));
    new Pawn(Colors.BLACK, this.getCell(1, 7));
  }
}
