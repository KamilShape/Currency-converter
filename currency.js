//Actual rates

// USD - US Dollar
// PLN - Polish zloty
// CAD - Canadian Dollar
// GBP - British Pound
// EUR - EURO
const curriencies = {
    USD: {
        PLN: 3.86709,
        GBP: 0.78161,
        CAD: 1.33567,
        EUR: 0.89712
    },
    PLN: {
        USD: 0.25834,
        GBP: 0.20192,
        CAD: 0.34505,
        EUR: 0.23177
    },
    GBP: {
        USD: 1.27921,
        PLN: 4.94683,
        CAD: 1.70861,
        EUR: 1.14763
    },
    CAD: {
        USD: 0.74858,
        PLN: 2.89482,
        GBP: 0.5851,
        EUR: 0.67157
    },
    EUR: {
        USD: 1.11453,
        PLN: 4.31002,
        GBP: 0.87113,
        CAD: 1.48864
    }
};

// console.log(typeof PLN.EUR);
// console.log(EUR.PLN)
class Exchange {
    constructor() {
        this.curr1 = document.getElementById("currency_have").value;
        this.curr2 = document.getElementById("currency_want").value;
        this.amount = document.getElementById("amount").value;
        this.curriencies = curriencies;
    }
    convert = () => {
        const input1 = this.curr1;
        const value1 = this.curriencies[input1];
        const input2 = this.curr2;
        const rate = value1[input2];
        if (input1 == input2) {
            const result = this.amount;
            document.querySelector('#result').innerHTML = result
            document.querySelector('#result').innerHTML = `${this.amount} ${input1} is ${result} ${input2}`
        } else if (input1 !== input2) {
            const result = Math.round(this.amount * rate * 100) / 100;
            document.querySelector('#result').innerHTML = `${this.amount} ${input1} is ${result} ${input2}`

        }


    };
}
const Convert = function (e) {
    e.preventDefault();
    const Convertion = new Exchange();
    Convertion.convert();

};

document.getElementById("convert_button").addEventListener("click", Convert);