import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponents from "./CellComponent";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, swapPlayer, currentPlayer }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
            swapPlayer()
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div>
            <h3>Поточний гравець: {currentPlayer?.color} </h3>
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map((cell) =>
                            <CellComponents click={click} cell={cell} key={cell.id} selectedCell={cell.x === selectedCell?.x && cell.y === selectedCell?.y}></CellComponents>
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default BoardComponent