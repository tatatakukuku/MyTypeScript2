"use strict";
var dayToEnglish = function (dayNum) {
    var english = '';
    switch (dayNum) {
        case 0:
            english = 'sunday';
            break;
        case 1:
            english = 'monday';
            break;
        case 2:
            english = 'tuesday';
            break;
        case 3:
            english = 'wednesday';
            break;
        case 4:
            english = 'thursday';
            break;
        case 5:
            english = 'friday';
            break;
        case 6:
            english = 'saturday';
            break;
    }
    return { ordinal: dayNum, english: english };
};
var now = new Date();
var diff = now.getTime() - new Date(2000, 3, 11).getTime();
console.log("diff: ".concat(diff, "ms"));
console.log("diff: ".concat(Math.floor(diff / 1000), "sec"));
console.log("diff: ".concat(diff / 1000 / 60, "minutes"));
console.log("diff: ".concat(diff / 1000 / 60 / 60, "hours"));
console.log("diff: ".concat(diff / 1000 / 60 / 60 / 24, "days"));
var dayOfToday = dayToEnglish(now.getDay());
console.log(dayOfToday.english.toUpperCase());
console.log(now.getTime());
