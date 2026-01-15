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
console.log(now.toLocaleString());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay());
var dayOfToday = dayToEnglish(now.getDay());
console.log(dayOfToday.english.toUpperCase());
