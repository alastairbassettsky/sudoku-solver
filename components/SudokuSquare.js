import React, {useState} from 'react';
import {Utils} from "./Utils";

export const SudokuSquare = (props) => {
    const [numbers, setNumbers] = useState(Array(9).fill(""));

    const getCounts = () => {
        let counts = {};
        numbers.forEach(x => {
            if (x !== "") counts[x] = (counts[x] || 0) + 1;
        });

        return counts;
    };

    const isSquareComplete = () => {
        let counts = getCounts();
        let size = 0;
        for (let key in counts) {
            if (counts.hasOwnProperty(key)) size++
        }

        return size === 9
    };

    const isSquareOkSoFar = () => {
        let counts = getCounts();
        for (let key in counts) {
            let value = counts[key];
            if (value > 1) return false
        }

        return true;
    };

    isSquareOkSoFar();
    isSquareComplete();

    const onNumberEntry = (key, enteredNumber) => {
        if (enteredNumber.match("^[1-9]?$") != null) {
            let newNumbers = Array.from(numbers);
            newNumbers[key] = enteredNumber;

            setNumbers(newNumbers)
        }
    };

    return (
        <div className="sudokuSquare" key={props.majorKey}>
            {Utils.range(0, 8).map(minorKey => {
                    let key = props.majorKey.toString() + minorKey.toString();
                    return <input
                        className="numberInput"
                        type="text"
                        key={key}
                        value={numbers[minorKey]}
                        onChange={event => onNumberEntry(minorKey, event.target.value)}
                    />
                }
            )}
        </div>
    )
};
