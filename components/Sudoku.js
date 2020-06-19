import React from 'react';
import {SudokuGrid} from "./SudokuGrid";

export const Sudoku = () => {
    const verifySudoku = () => {
        console.log("False");
        return false;
    };

    return (
        <div className="sudoku" key="sudoku">
            <SudokuGrid/>
            <input type="button" value="Check" onClick={verifySudoku}/>
        </div>
    )
};


