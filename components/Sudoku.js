import React, {useState} from 'react';
import {SudokuGrid} from "./SudokuGrid";
import {Utils} from "./Utils";
import {fullSudoku} from "./Examples";
import {GridEntry} from "./GridEntry";
import {GridEntryUtils} from "./GridEntryUtils";

export const Sudoku = () => {
    const [entries, setEntries] = useState(fullSudoku);
    // const [entries, setEntries] = useState(Array(9).fill(Array(9).fill("")));

    const [gridEntries, setGridEntries] = useState(GridEntryUtils.initializeGrid);

    const onNumberEntry = (majorKey, minorKey, enteredNumber) => {
        let gridEntriesCopy = new Map(gridEntries);
        let numbersInMajorSquare = gridEntriesCopy.get(majorKey);
        let numberInMinorSquare = numbersInMajorSquare.get(minorKey);
        numberInMinorSquare.value = enteredNumber;

        setGridEntries(gridEntriesCopy);
    };

    const verifySudoku = () => {
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
            <SudokuGrid gridEntries={gridEntries} entries={entries} onNumberEntry={onNumberEntry}/>
            <input type="button" value="Check" onClick={verifySudoku}/>
        </div>
    )
};


