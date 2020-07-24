import React from 'react';
import {Utils} from "./Utils";
import {SudokuMinorSquare} from "./SudokuMinorSquare";

export const SudokuMajorSquare = (props) => {
    return (
        <div className="sudokuSquare" key={props.majorKey}>
            {Utils.range(0, 8).map(minorKey => {
                    return <SudokuMinorSquare
                        majorKey={props.majorKey}
                        minorKey={minorKey}
                        squareValue={props.majorKeyEntries.get(minorKey)}
                        onNumberEntry={props.onNumberEntry}
                    />;
                }
            )}
        </div>
    )
};
