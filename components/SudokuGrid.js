import React from 'react';
import {SudokuMajorSquare} from "./SudokuMajorSquare";
import {Utils} from "./Utils";

export const SudokuGrid = (props) => {
    return (
        <div className="sudokuGrid" key="sudokuGrid">
            {Utils.range(0, 8).map(majorKey =>
                <SudokuMajorSquare
                    key={majorKey}
                    majorKey={majorKey}
                    entries={props.entries[majorKey]}
                    onNumberEntry={props.onNumberEntry}
                />
            )}
        </div>
    )
};