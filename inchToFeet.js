
const inchToFeet = (inch) => {
    const feet = inch / 12;
    return parseFloat(feet).toFixed(2) + " Feet."; 
};

const print = inchToFeet(200);

console.log(print)