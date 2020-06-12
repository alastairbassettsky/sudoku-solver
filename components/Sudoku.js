import React, {useState} from 'react';
import {SudokuSquare} from "./SudokuSquare";
import {Utils} from "./Utils";

export const Sudoku = () => {
    return (
        <div className="sudokuGrid">
            {Utils.range(0, 0).map(number =>
                <SudokuSquare key={number}/>
            )}
        </div>
    )
};


