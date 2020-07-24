export class GridEntry {
    
    constructor(value, majorGridKey, minorGridKey) {
        this.value = value;
        this.majorGridKey = majorGridKey;
        this.minorGridKey = minorGridKey;
        this.xCoord = this.convertGridToXCoordinate(majorGridKey, minorGridKey);
        this.yCoord = this.convertGridToYCoordinate(majorGridKey, minorGridKey);
    }

    convertGridToXCoordinate(majorKey, minorKey) {
        //minorKey: (0,3,6) -> +0, (1,4,7) -> +1, (2,5,8) -> +2
        //majorKey: (0,3,6) -> +0, (1,4,7) -> +3, (2,5,8) -> +6
        let majorContribution = 3 * (majorKey % 3);
        let minorContribution = minorKey % 3;
        return majorContribution + minorContribution;
    }

    convertGridToYCoordinate(majorKey, minorKey) {
        //minorKey: (0,1,2) -> +0, (3,4,5) -> +1, (6,7,8) -> +2
        //majorKey: (0,1,2) -> +0, (3,4,5) -> +3, (6,7,8) -> +6

        let majorContribution = 3 * Math.floor(majorKey / 3);
        let minorContribution = Math.floor(minorKey / 3);
        return majorContribution + minorContribution;
    }

    convertXAndYToGridCoordinates(xCoord, yCoord) {
        //to be implemented
    }
}
