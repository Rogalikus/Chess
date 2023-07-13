import { Figure, FigureNames } from "../Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackLogo from "../../chess-Icons/Chess_pdt60.png";
import whiteLogo from "../../chess-Icons/Chess_plt60.png";
import { Queen } from "./Queen";
import { Bishop } from "./Bishop";
import { Knight } from "./Knight";
import { Rook } from "./Rook";

export class Pawn extends Figure {
  isFirstStep: boolean = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection =
      this.cell.figure?.color === Colors.BLACK ? 2 : -2;

    if (
      (target.y === this.cell.y + direction ||
        (this.isFirstStep &&
          target.y === this.cell.y + firstStepDirection &&
          this.cell.board.getCell(target.x, target.y - direction).isEmpty())) &&
      target.x === this.cell.x &&
      this.cell.board.getCell(target.x, target.y).isEmpty()
    ) {
      return true;
    }

    if (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }

    return false;
  }

  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.isFirstStep = false;
    if (
      (this.color === Colors.BLACK && target.y === 7) ||
      (this.color === Colors.WHITE && target.y === 0)
    ) {
      const promotionFigure = prompt(
        "Select a promotion figure: Queen, Bishop, Knight, Rook"
      );

      switch (promotionFigure?.toLowerCase()) {
        case "queen" || "Queen":
          this.cell.figure = new Queen(this.color, target);
          break;
        case "bishop" || "Bishop":
          this.cell.figure = new Bishop(this.color, target);
          break;
        case "knight" || "Knight":
          this.cell.figure = new Knight(this.color, target);
          break;
        case "rook" || "Knight":
          this.cell.figure = new Rook(this.color, target);
          break;
        default:
          this.cell.figure = new Queen(this.color, target);
          break;
      }
    }
  }
}
