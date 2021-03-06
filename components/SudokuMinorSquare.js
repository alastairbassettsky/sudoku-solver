import React from 'react';

export const SudokuMinorSquare = (props) => {
    let key = props.majorKey.toString() + "_" + props.minorKey.toString();

    const onNumberEntry = (enteredNumber) => {
        if (enteredNumber.match("^[1-9]?$") != null) {
            if (enteredNumber.length === 1){
                enteredNumber = parseInt(enteredNumber)
            }
            props.onNumberEntry(props.majorKey, props.minorKey, enteredNumber)
        }
    };

    return (
        <input
            className="numberInput"
            type="text"
            id={key}
            key={key}
            value={props.squareValue.value}
            onChange={event => onNumberEntry(event.target.value)}
        />
    )
};
