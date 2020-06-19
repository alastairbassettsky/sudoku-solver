import React from 'react';
import {SudokuSquare} from "./SudokuSquare";
import {Utils} from "./Utils";

export const SudokuGrid = () => {
    return (
        <div className="sudokuGrid" key="sudokuGrid">
            {Utils.range(0, 8).map(number =>
                <SudokuSquare key={number} majorKey={number}/>
            )}
        </div>
    )
};