import {GridEntry} from "./GridEntry";
import {Utils} from "./Utils";
import {fullSudoku} from "./Examples";

export class MajorGridEntries extends Map {
}

export class WholeGridEntries extends Map {
}


export const GridEntryUtils = {
    initializeGrid: () => {
        let wholeGridEntries = new WholeGridEntries();

        Utils.range(0, 8).map(majorGridKey => {
            let majorGridEntries = new MajorGridEntries();

            Utils.range(0, 8).map(minorGridKey => {
                    let gridEntry = new GridEntry(fullSudoku[majorGridKey][minorGridKey], majorGridKey, minorGridKey);
                    majorGridEntries.set(minorGridKey, gridEntry);
                }
            );
            wholeGridEntries.set(majorGridKey, majorGridEntries);
        });

        return wholeGridEntries;
    },

    groupEntriesByRow: (entries) => {
        let entriesByRow = new Map();

        Utils.range(0, 8).map(majorGridKey => {
            let majorGridEntries = entries.get(majorGridKey);
            Utils.range(0, 8).map(minorGridKey => {
                let minorGridEntry = majorGridEntries.get(minorGridKey);
                let row = entriesByRow.get(minorGridEntry.yCoord);
                if (row === undefined) {
                    let row = new Map();
                    row.set(minorGridEntry.xCoord, minorGridEntry);
                    entriesByRow.set(minorGridEntry.yCoord, row);;
                } else {
                    row.set(minorGridEntry.xCoord, minorGridEntry);
                }
            })
        });

        return entriesByRow;
    },

    groupEntriesByColumn: (entries) => {
        let entriesByColumn = new Map();

        Utils.range(0, 8).map(majorGridKey => {
            let majorGridEntries = entries.get(majorGridKey);
            Utils.range(0, 8).map(minorGridKey => {
                let minorGridEntry = majorGridEntries.get(minorGridKey);
                let column = entriesByColumn.get(minorGridEntry.xCoord);
                if (column === undefined) {
                    let row = new Map();
                    row.set(minorGridEntry.yCoord, minorGridEntry);
                    entriesByColumn.set(minorGridEntry.xCoord, row);
                } else {
                    column.set(minorGridEntry.yCoord, minorGridEntry);
                }
            })
        });

        return entriesByColumn;
    },

    groupEntriesByGridFromColumn: (entries) => {
        let entriesBySquare = new Map();

        Utils.range(0, 8).map(xCoord => {
            let columnEntries = entries.get(xCoord);
            Utils.range(0, 8).map(yCoord => {
                let gridEntry = columnEntries.get(yCoord);
                let majorGrid = entriesBySquare.get(gridEntry.majorGridKey);
                if (majorGrid === undefined) {
                    let row = new Map();
                    row.set(gridEntry.minorGridKey, gridEntry);
                    entriesBySquare.set(gridEntry.majorGridKey, row);
                } else {
                    majorGrid.set(gridEntry.minorGridKey, gridEntry);
                }
            })
        });

        return entriesBySquare;
    },



};