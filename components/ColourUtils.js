export const ColourUtils = {

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