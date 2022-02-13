const mark = {
    fName: 'Mark',
    lName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};

const john = {
    fName: 'John',
    lName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi)
