import {Utils} from "./Utils";
import {GridEntryUtils} from "./GridEntryUtils";
import {ColourUtils} from "./ColourUtils";

export const ValidationUtils = {
    validateWholeGrid: (entries) => {
        let entriesCopy = new Map(entries);

        //Default all entries' validity back to true
        Utils.range(0, 8).forEach(majorSquareKey => {
                let majorSquareEntries = entriesCopy.get(majorSquareKey);
                Utils.range(0, 8).forEach(minorSquareKey => {
                        let minorGridEntry = majorSquareEntries.get(minorSquareKey);
                        minorGridEntry.valid = true;
                        ColourUtils.colourGridEntry(minorGridEntry, true);
                    }
                )
            }
        );

        //Squares
        Utils.range(0, 8).forEach(majorSquareKey =>
            entriesCopy.set(majorSquareKey, ValidationUtils.validateSetOfNine(entries.get(majorSquareKey)))
        );

        //Rows
        let entriesCopyByRow = GridEntryUtils.groupEntriesByRow(entriesCopy);
        Utils.range(0, 8).forEach(rowKey =>
            entriesCopyByRow.set(rowKey, ValidationUtils.validateSetOfNine(entriesCopyByRow.get(rowKey)))
        );

        //Columns
        let entriesCopyByColumn = GridEntryUtils.groupEntriesByColumn(entriesCopyByRow);
        Utils.range(0, 8).forEach(columnKey =>
            entriesCopyByColumn.set(columnKey, ValidationUtils.validateSetOfNine(entriesCopyByColumn.get(columnKey)))
        );

        //Return the result converted from grouped by columns to grouped by square
        return GridEntryUtils.groupEntriesByGridFromColumn(entriesCopyByColumn);
    },

    validateSetOfNine: (entries) => {
        let entriesCopy = new Map(entries);
        let badNumbers = Utils.getBadNumbers(entriesCopy);

        entriesCopy.forEach(entry => {
            if (badNumbers.has(entry.value)) {
                entry.valid = false
            }
        });

        return entriesCopy;
    },

    findBadEntries: (entries) => {
        let badEntries = [];

        Utils.range(0, 8).map(majorKey => {
            let majorGridEntries = entries.get(majorKey);
            Utils.range(0, 8).map(minorKey => {
                let gridEntry = majorGridEntries.get(minorKey);
                if (!gridEntry.valid) {
                    badEntries.push(gridEntry);
                }
            })
        });

        return badEntries;
    },

    colourBadEntriesRed: (badEntries) => {
        for (let key in badEntries) {
            let badEntry = badEntries[key];
            ColourUtils.colourGridEntry(badEntry, false);
        }
    },

    lockInAllPopulatedEntries: (entries) => {
        Utils.range(0, 8).map(majorKey => {
            let majorGridEntries = entries.get(majorKey);
            Utils.range(0, 8).map(minorKey => {
                let gridEntry = majorGridEntries.get(minorKey);
                if (gridEntry.value) {
                    gridEntry.fixed = true;
                    ColourUtils.colourGridEntry(gridEntry, true);
                }
            })
        });
    },

    isSudokuComplete: (entries) => {
        let complete = true;

        Utils.range(0, 8).map(majorKey => {
            let majorGridEntries = entries.get(majorKey);
            Utils.range(0, 8).map(minorKey => {
                let gridEntry = majorGridEntries.get(minorKey);
                if (!gridEntry.value) {
                    complete = false;
                }
            })
        });

        return complete;
    }
};