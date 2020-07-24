import {Utils} from "./Utils";

export const ValidationUtils = {
    validateMinorGrid: (entries) => {
        let badNumbers = Utils.getBadNumbers(entries);

        entries.forEach(entry => {
           if (badNumbers.has(entry.value)) {
               entry.valid = false
               //This doesn't work as we're directly manipulating entries istead of using setEntries (I think?)
           }
        });

        console.log(entries);
    }
};