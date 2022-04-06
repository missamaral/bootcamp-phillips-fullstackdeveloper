class BankAccount {
    constructor(branch, number, type) {
        this.branch = branch;
        this.number = number;
        this.type = type;
        this._balance = 0; //good practice: include an underscore before the attributes you will manipulate with getters and setters
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        this._balance = amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            return "Insufficient balance"
        }
        this._balance = this._balance - amount;

        return this._balance;
    }

    deposit(amount) {
        this._balance = this._balance + amount;

        return this._balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(branch, number, creditCard) {
        super(branch, number);
        this.type = 'checking';
        this._creditCard = creditCard;
    }

    get creditCard() {
        return this._creditCard;
    }
    
    set creditCard(value) {
        this._creditCard = value;
    }
}

class SavingsAccount extends BankAccount {
    constructor(branch, number) {
        super(branch, number);
        this.type = 'savings';
    }
}

class StudentAccount extends BankAccount {
    constructor(branch, number) {
        super(branch, number);
        this.type = 'student';
    }

    withdraw(amount) {
        if(amount > 500) {
            return "Operation denied"
        }

        this._balance = this._balance - amount;
    }
}

