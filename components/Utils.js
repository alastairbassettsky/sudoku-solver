export const Utils = {
        range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

        getCounts: (numbers) => {
            let counts = {};
            numbers.forEach(x => {
                if (x !== "") counts[x] = (counts[x] || 0) + 1;
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
        }
    }
;