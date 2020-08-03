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

        let gridKey = minorSquareEntry.majorGridKey + "_" + minorSquareEntry.minorGridKey;
        document.getElementById(gridKey).style.color="black";
    };

    const verifySudoku = () => {
        setGridEntries(ValidationUtils.validateWholeGrid(gridEntries));

        let badEntries = ValidationUtils.findBadEntries(gridEntries);

        ValidationUtils.colourBadEntriesRed(badEntries);
    };

    return (
        <div className="sudoku" key="sudoku">
            <SudokuGrid gridEntries={gridEntries} onNumberEntry={onNumberEntry}/>
            <input type="button" value="Check" onClick={verifySudoku}/>
        </div>
    )
};


