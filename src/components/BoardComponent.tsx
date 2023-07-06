import React, { FC } from "react";
import { Board } from "../models/Board";
import CellComponents from "./CellComponent";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {


    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map((cell) =>
                        <CellComponents cell={cell} key={cell.id}></CellComponents>
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent