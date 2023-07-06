import { Figure, FigureNames } from "../Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackLogo from "../../chess-Icons/Chess_ndt60.png";
import whiteLogo from "../../chess-Icons/Chess_nlt60.png";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
