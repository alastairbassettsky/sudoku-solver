import React, {useState} from 'react';
import {SudokuGrid} from "./SudokuGrid";
import {GridEntryUtils} from "./GridEntryUtils";
import {ValidationUtils} from "./ValidationUtils";
import {ColourUtils} from "./ColourUtils";

export const Sudoku = () => {
    const [gridEntries, setGridEntries] = useState(GridEntryUtils.initializeGrid);

    const onNumberEntry = (majorKey, minorKey, enteredNumber) => {
        let gridEntriesCopy = new Map(gridEntries);

        let majorSquareEntries = gridEntriesCopy.get(majorKey);
        let minorSquareEntry = majorSquareEntries.get(minorKey);

        if (!minorSquareEntry.fixed) {
            minorSquareEntry.value = enteredNumber;

            setGridEntries(gridEntriesCopy);

            ColourUtils.colourGridEntry(minorSquareEntry, true)
        }
    };

    const lockNumbers = () => {
        if(isSudokuCorrect()) {
            ValidationUtils.lockInAllPopulatedEntries(gridEntries);
        }
    };

    const isSudokuCorrect = () => {
        setGridEntries(ValidationUtils.validateWholeGrid(gridEntries));

        let badEntries = ValidationUtils.findBadEntries(gridEntries);

        ValidationUtils.colourBadEntriesRed(badEntries);

        return badEntries.length === 0
    };

    return (
        <div className="sudoku" key="sudoku">
            <SudokuGrid gridEntries={gridEntries} onNumberEntry={onNumberEntry}/>
            <input type="button" value="Start" onClick={lockNumbers}/>
            <input type="button" value="Check" onClick={isSudokuCorrect}/>
        </div>
    )
};


