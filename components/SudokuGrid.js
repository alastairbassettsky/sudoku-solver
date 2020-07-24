import React from 'react';
import {SudokuMajorSquare} from "./SudokuMajorSquare";
import {Utils} from "./Utils";

export const SudokuGrid = (props) => {

    return (
        <div className="sudokuGrid" key="sudokuGrid">
            {Utils.range(0, 8).map(majorKey =>
                <SudokuMajorSquare
                    key={"Major Key: " + majorKey}
                    majorKey={majorKey}
                    majorKeyEntries={props.gridEntries.get(majorKey)}
                    onNumberEntry={props.onNumberEntry}
                />
            )}
        </div>
    )
};