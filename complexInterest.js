function complexInterest(p, r, m, t) {
    const amount = p * (Math.pow((1 + (r / m)), (m * t)));
    console.log('Amount: ' + amount + 'Tk');
    const interest = amount - p;
    return interest;
}

let initialValue = 5000;
let rate = 10;
let rateOfReturn = rate / 100;
let noOfTimeCompoundedAnnualy = 1;
let noOfYears = 3;

const interest = complexInterest(initialValue, rateOfReturn, noOfTimeCompoundedAnnualy, noOfYears);
console.log('Interest: ' + interest + 'Tk');



