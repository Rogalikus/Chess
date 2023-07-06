import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "../Figure";
import whiteLogo from "../../chess-Icons/Chess_kdt60.png";
import blackLogo from "../../chess-Icons/Chess_klt60.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
