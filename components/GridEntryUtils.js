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
};