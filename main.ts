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
const month: number = now.getMonth();
const date: number = now.getDate();
const day: number = now.getDay();


const dayOfToday: Day = dayToEnglish(now.getDay());
console.log(dayOfToday.english.toUpperCase());
console.log(now.getTime());