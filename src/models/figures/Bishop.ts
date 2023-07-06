import { Figure, FigureNames } from "../Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackLogo from "../../chess-Icons/Chess_bdt60.png";
import whiteLogo from "../../chess-Icons/Chess_blt60.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
