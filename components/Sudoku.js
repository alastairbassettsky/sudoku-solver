import React, {useState} from 'react';
import {SudokuGrid} from "./SudokuGrid";
import {GridEntryUtils} from "./GridEntryUtils";
import {ValidationUtils} from "./ValidationUtils";
import {ColourUtils} from "./ColourUtils";

export const Sudoku = () => {
    const [gridEntries, setGridEntries] = useState(GridEntryUtils.initializeGrid);
    const [checkEnabled, setCheckEnabled] = useState(false);

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

    const verifySudoku = () => {
        if (isSudokuCorrect() && ValidationUtils.isSudokuComplete(gridEntries)) {
            ColourUtils.markGridAsComplete()
        }
    };

    const lockNumbers = () => {
        if(isSudokuCorrect()) {
            ValidationUtils.lockInAllPopulatedEntries(gridEntries);
            document.getElementById("startButton").disabled = true;
            setCheckEnabled(true);
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
            <input id="startButton" type="button" value="Start" onClick={lockNumbers}/>
            <input id="checkButton" type="button" disabled={!checkEnabled} value="Check" onClick={verifySudoku}/>
        </div>
    )
};


