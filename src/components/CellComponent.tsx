import React, { FC } from "react";
import { Cell } from "../models/Cell";


interface CellProps {
    cell: Cell
    selectedCell: boolean | null | Cell
    click: (cell: Cell) => void
}


const CellComponents: FC<CellProps> = ({ cell, selectedCell, click }) => {
    return (
        <div style={{ background: cell.available && cell.figure ? 'green' : '' }} onClick={() => click(cell)} className={['cell', cell.color, selectedCell ? 'selected' : ''].join(' ')}>
            {cell.available && !cell.figure && <div className="available" />}
            {cell.figure?.logo && <img src={cell.figure?.logo} alt='' />}
        </div>
    )
}

export default CellComponents;