function simpleInterest(p, r, t) {
    const SI = (p * r * t) / 100;

    return SI;
}

const principal = 1000;
const rate = 5;
const time = 2;

const simpleWithInterest = simpleInterest(principal, rate, time);

console.log("Simple Interest: " + simpleWithInterest + 'taka');