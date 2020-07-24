import React, {useState} from 'react';
import {SudokuGrid} from "./SudokuGrid";
import {GridEntryUtils} from "./GridEntryUtils";
import {ValidationUtils} from "./ValidationUtils";

export const Sudoku = () => {
    const [gridEntries, setGridEntries] = useState(GridEntryUtils.initializeGrid);

    const onNumberEntry = (majorKey, minorKey, enteredNumber) => {
        let gridEntriesCopy = new Map(gridEntries);

        let majorSquareEntries = gridEntriesCopy.get(majorKey);
        let minorSquareEntry = majorSquareEntries.get(minorKey);
        minorSquareEntry.value = enteredNumber;

        setGridEntries(gridEntriesCopy);
    };

    const verifySudoku = () => {
        ValidationUtils.validateMinorGrid(gridEntries.get(0));
        // let goodSoFar = Utils.isFullGridOkSoFar(gridEntries);
        // let complete = Utils.isFullGridComplete(gridEntries);
        //
        // // console.log("***** Verifying sudoku *****");
        // // console.log("Good so far?: " + goodSoFar);
        // // console.log("Complete?: " + complete);
        //
        // Utils.getBadEntries(gridEntries[0]);
        //
        // return complete;
    };

    return (
        <div className="sudoku" key="sudoku">
            <SudokuGrid gridEntries={gridEntries} onNumberEntry={onNumberEntry}/>
            <input type="button" value="Check" onClick={verifySudoku}/>
        </div>
    )
};


