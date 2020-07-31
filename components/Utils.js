export const Utils = {
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

    getCounts: (numbers) => {
        let counts = [];

        numbers.forEach(x => {
            if (x.value !== "") counts[x.value] = (counts[x.value] || 0) + 1;
        });

        return counts;
    },

    isSetComplete: (numbersInSet) => {
        let counts = Utils.getCounts(numbersInSet);
        let size = 0;
        for (let key in counts) {
            if (counts.hasOwnProperty(key)) size++
        }

        return size === 9
    },

    isSetOkSoFar: (numbersInSet) => {
        let counts = Utils.getCounts(numbersInSet);
        for (let key in counts) {
            let value = counts[key];
            if (value > 1) return false
        }

        return true;
    },

    getBadEntries: (numbersInSet) => {
        let badNumbers = Utils.getBadNumbers(numbersInSet);

        var indexes = [], i = -1;
        badNumbers.forEach(badNumber => {
            while ((i = numbersInSet.indexOf(parseInt(badNumber), i + 1)) !== -1) {
                indexes.push(i);
            }
        });

        return indexes;
    },

    getBadNumbers: (numbersInSet) => {
        let counts = Utils.getCounts(numbersInSet);
        let badNumbers = new Set();
        for (let entry in counts) {
            let count = counts[entry];
            if (count > 1) {
                badNumbers.add(parseInt(entry));
            }
        }

        return badNumbers;
    },

    isFullGridComplete: (numbersInGrid) => {
        for (let key in numbersInGrid) {
            if (!Utils.isSetComplete(numbersInGrid[key])) return false
        }

        return true;
    },

    isFullGridOkSoFar: (numbersInGrid) => {
        for (let key in numbersInGrid) {
            if (!Utils.isSetOkSoFar(numbersInGrid[key])) return false
        }

        return true;
    },

    splitGridIntoLines: (numbersInGrid) => {
        
    },
};