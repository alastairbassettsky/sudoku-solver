import React from 'react';

export const SudokuMinorSquare = (props) => {
    let key = props.majorKey.toString() + props.minorKey.toString();

    const onNumberEntry = (enteredNumber) => {
        if (enteredNumber.match("^[1-9]?$") != null) {
            props.onNumberEntry(props.majorKey, props.minorKey, enteredNumber)
        }
    };

    return (
        <input
            className="numberInput"
            type="text"
            key={key}
            value={props.value}
            onChange={event => onNumberEntry(event.target.value)}
        />
    )
};
