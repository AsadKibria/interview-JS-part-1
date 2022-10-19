function leapYear (year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}


let print = leapYear(2022);

console.log(print);