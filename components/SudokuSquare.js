import React, {useState} from 'react';
import {Utils} from "./Utils";

export const SudokuSquare = (key) => {
    // const [singleValue, setSingleValue] = useState(5);
    const [numbers, setNumbers] = useState(Array(9).fill(""));

    const onNumberEntry = (key, enteredNumber) => {
        if (enteredNumber.match("^[1-9]?$") != null) {
            let newNumbers = numbers;
            newNumbers[key] = enteredNumber;

            console.log(newNumbers);
            setNumbers(newNumbers)
            // setSingleValue(enteredNumber);
        }
    };

    console.log("NUMBERS:");
    console.log(numbers);

    return (
        <div className="sudokuSquare" key={key}>
            {Utils.range(0, 8).map(squareKey =>
                    <input className="numberInput" type="text" key={squareKey} value={numbers[squareKey]}
                           onChange={event => onNumberEntry(squareKey, event.target.value)}/>



                //*<input className="numberInput" type="text" key={squareKey} value={singleValue}*//
                //*       onChange={event => onNumberEntry(squareKey, event.target.value)}/>*//
                // <NumberInput squareKey={squareKey} number={numbers[squareKey]} onNumberEntry={onNumberEntry}/>
            )}
        </div>
    )
};

// const NumberInput = (props) => {
//
//     const onInputChange = (value) => {
//         if (value.match("^[1-9]?$") != null) {
//             props.onNumberEntry(props.squareKey, value)
//         }
//     };
//
//     return (
//         <input className="numberInput" type="text" key={props.squareKey} value={props.number}
//                onChange={event => onInputChange(event.target.value)}/>
//     )
// };
