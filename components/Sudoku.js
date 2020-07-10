import React, {useState} from 'react';
import {SudokuGrid} from "./SudokuGrid";
import {Utils} from "./Utils";
import {fullSudoku} from "./Examples";

export const Sudoku = () => {
    const [entries, setEntries] = useState(fullSudoku);
    // const [entries, setEntries] = useState(Array(9).fill(Array(9).fill("")));

    const onNumberEntry = (majorKey, minorKey, enteredNumber) => {
        let numbers = entries[majorKey];
        let newNumbers = Array.from(numbers);
        newNumbers[minorKey] = enteredNumber;

        let newEntries = Array.from(entries);
        newEntries[majorKey] = newNumbers;

        setEntries(newEntries)
    };

    const verifySudoku = () => {
        let goodSoFar = Utils.isFullGridOkSoFar(entries);
        let complete = Utils.isFullGridComplete(entries);

        console.log("***** Verifying sudoku *****");
        console.log("Good so far?: " + goodSoFar);
        console.log("Complete?: " + complete);

        return complete;
    };

    return (
        <div className="sudoku" key="sudoku">
            <SudokuGrid entries={entries} onNumberEntry={onNumberEntry}/>
            <input type="button" value="Check" onClick={verifySudoku}/>
        </div>
    )
};


