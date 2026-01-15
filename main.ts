type Day = { ordinal: number, english: string };
const dayToEnglish = (dayNum: number): Day => {
    let english: string = '';
    switch (dayNum) {
        case 0: english = 'sunday'; break;   
        case 1: english = 'monday'; break;   
        case 2: english = 'tuesday'; break;   
        case 3: english = 'wednesday'; break;   
        case 4: english = 'thursday'; break;   
        case 5: english = 'friday'; break;   
        case 6: english = 'saturday'; break;   
    }
    return {ordinal: dayNum, english: english};
}

const now: Date = new Date();
console.log(now.toLocaleString());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay());

const dayOfToday: Day = dayToEnglish(now.getDay());
console.log(dayOfToday.english.toUpperCase());