import {Utils} from "./Utils";

export const ColourUtils = {

    markGridAsComplete: () => {
        Utils.range(0, 8).map(majorKey => {
            Utils.range(0, 8).map(minorKey => {
                let gridKey = majorKey + "_" + minorKey;
                document.getElementById(gridKey).style.color = "green";
            });
        });
    },

    colourGridEntry: (gridEntry, valid) => {
        let gridKey = gridEntry.majorGridKey + "_" + gridEntry.minorGridKey;
        if (gridEntry.fixed) {
            document.getElementById(gridKey).style.color = "black";
        } else {
            if (valid) {
                document.getElementById(gridKey).style.color = "dimgrey";
            } else {
                document.getElementById(gridKey).style.color = "red";
            }
        }
    },
};