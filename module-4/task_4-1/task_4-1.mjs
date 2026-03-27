"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const accountType = {
    Normal: "brukskonto",
    Saving: "sparekonto",
    Credit: "kreditkonto",
    Pension: "pensionkonto",
}

printOut(Object.values(accountType).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount {
    constructor(accountType){
        this.type = accountType;
    }

    toString(){
        return this.type;
    }

    setType(newType){
        const oldType = this.type;
        this.type = newType;
        printOut("Account type changed from " + oldType + " to " + this.type);
    }
}

const myAccount = new TAccount("Normal");
printOut("myAccount type: " + myAccount.toString());
myAccount.setType("Saving");
printOut("myAccount type: " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccountExtended {
    #withdrawalCount = 0;

    constructor(type, balance = 0){
        this.type = type;
        this.balance = balance;
    }

    toString(){
        return this.type;
    }

    setType(newType){
        if(this.type === newType){
            return;
        }

        const oldType = this.type;
        this.type = newType;
        this.#withdrawalCount = 0;
        printOut("Account type changed from " + oldType + " to " + this.type);
    }

    deposit(amount){
        if(amount <= 0){
            return;
        }

        this.balance += amount;
        this.#withdrawalCount = 0;
        printOut("Deposited " + amount + ". New balance: " + this.balance);
    }

    withdraw(amount){
        if(amount <= 0){
            return;
        }

        switch(this.type){
            case "Pension":
                printOut("Withdrawals are not allowed for Pension accounts.");
                return;
            case "Saving":
                if(this.#withdrawalCount >= 3){
                    printOut("Saving accounts allow only 3 withdrawals.");
                    return;
                }
                break;
            default:
                break;
        }

        if(amount > this.balance){
            printOut("Not enough balance.");
            return;
        }

        this.balance -= amount;
        this.#withdrawalCount++;
        printOut("Withdrew " + amount + ". New balance: " + this.balance);
    }

    getBalance(){
        return this.balance;
    }
}

const accountForPart3 = new TAccountExtended("Normal", 0);
accountForPart3.setType("Saving");
accountForPart3.deposit(120);

accountForPart3.withdraw(10);
accountForPart3.withdraw(5);
accountForPart3.withdraw(2);
accountForPart3.withdraw(1);

accountForPart3.deposit(1);

accountForPart3.setType("Pension");
accountForPart3.withdraw(1);

accountForPart3.setType("Saving");

const diffTo100 = 100 - accountForPart3.getBalance();
if(diffTo100 > 0){
    accountForPart3.deposit(diffTo100);
}

printOut("Final account type: " + accountForPart3.toString());
printOut("Final balance: " + accountForPart3.getBalance());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccountPart4 {
    #withdrawalCount = 0;

    constructor(type, balance = 0){
        this.type = type;
        this.balance = balance;
    }

    setType(newType){
        if(this.type === newType){
            return;
        }

        const oldType = this.type;
        this.type = newType;
        this.#withdrawalCount = 0;
        printOut("Account type changed from " + oldType + " to " + this.type);
    }

    deposit(amount){
        if(amount <= 0){
            return;
        }

        this.balance += amount;
        this.#withdrawalCount = 0;
        printOut("Deposited " + amount + ". Balance: " + this.balance);
    }

    withdraw(amount){
        if(amount <= 0){
            return;
        }

        switch(this.type){
            case "Pension":
                printOut("Withdrawal denied: Pension accounts do not allow withdrawals.");
                return;

            case "Saving":
                if(this.#withdrawalCount >= 3){
                    printOut("Withdrawal denied: Saving accounts allow max 3 withdrawals.");
                    return;
                }
                break;

            default:
                break;
        }

        if(amount > this.balance){
            printOut("Withdrawal denied: Not enough balance.");
            return;
        }

        this.balance -= amount;
        this.#withdrawalCount++;
        printOut("Withdrew " + amount + ". Balance: " + this.balance);
    }

    toString(){
        return this.type;
    }

    getBalance(){
        return this.balance;
    }
}

const accountForPart4 = new TAccountPart4("Normal", 0);
accountForPart4.setType("Saving");
accountForPart4.deposit(100);

accountForPart4.withdraw(10);
accountForPart4.withdraw(10);
accountForPart4.withdraw(10);
accountForPart4.withdraw(10);

accountForPart4.deposit(30);
accountForPart4.withdraw(10);

accountForPart4.setType("Pension");
accountForPart4.withdraw(5);

accountForPart4.setType("Saving");
if(accountForPart4.getBalance() < 100){
    accountForPart4.deposit(100 - accountForPart4.getBalance());
}

printOut("Final account type: " + accountForPart4.toString());
printOut("Final balance: " + accountForPart4.getBalance());
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccountPart5 {
    static CurrencyType = {
        NOK: "NOK",
        EUR: "EUR",
        USD: "USD",
    };

    #currencyType = TAccountPart5.CurrencyType.NOK;

    constructor(type, balance = 0){
        this.type = type;
        this.balance = balance;
    }

    setCurrencyType(newCurrencyType){
        if(this.#currencyType === newCurrencyType){
            return;
        }

        this.#currencyType = newCurrencyType;
        printOut("Currency changed to " + this.#currencyType);
    }

    getCurrencyType(){
        return this.#currencyType;
    }

    deposit(amount){
        if(amount <= 0){
            return;
        }

        this.balance += amount;
        printOut("Deposited " + amount + " " + this.#currencyType + ". Balance: " + this.balance + " " + this.#currencyType);
    }
}

const accountForPart5 = new TAccountPart5("Saving", 0);
accountForPart5.setCurrencyType(TAccountPart5.CurrencyType.NOK);
accountForPart5.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccountPart6 {
    static CurrencyType = {
        NOK: "NOK",
        EUR: "EUR",
        USD: "USD",
    };

    static CurrencyRateToNok = {
        NOK: 1,
        EUR: 11.5,
        USD: 10.5,
    };

    #currencyType = TAccountPart6.CurrencyType.NOK;

    constructor(type, balance = 0){
        this.type = type;
        this.balance = balance;
    }

    #convertCurrency(amount, fromCurrency, toCurrency){
        const fromRate = TAccountPart6.CurrencyRateToNok[fromCurrency];
        const toRate = TAccountPart6.CurrencyRateToNok[toCurrency];

        const amountInNok = amount * fromRate;
        return amountInNok / toRate;
    }

    setCurrencyType(newCurrencyType){
        if(this.#currencyType === newCurrencyType){
            return;
        }

        const oldCurrency = this.#currencyType;
        this.balance = this.#convertCurrency(this.balance, oldCurrency, newCurrencyType);
        this.#currencyType = newCurrencyType;

        printOut(
            "Currency changed from " + oldCurrency + " to " + this.#currencyType +
            ". Balance: " + this.balance.toFixed(2) + " " + this.#currencyType
        );
    }

    deposit(amount){
        if(amount <= 0){
            return;
        }

        this.balance += amount;
        printOut("Deposited " + amount.toFixed(2) + " " + this.#currencyType + ". Balance: " + this.balance.toFixed(2) + " " + this.#currencyType);
    }

    withdraw(amount){
        if(amount <= 0){
            return;
        }

        if(amount > this.balance){
            printOut("Withdrawal denied: Not enough balance.");
            return;
        }

        this.balance -= amount;
        printOut("Withdrew " + amount.toFixed(2) + " " + this.#currencyType + ". Balance: " + this.balance.toFixed(2) + " " + this.#currencyType);
    }
}

const accountForPart6 = new TAccountPart6("Saving", 0);
accountForPart6.deposit(150);
accountForPart6.setCurrencyType(TAccountPart6.CurrencyType.EUR);
accountForPart6.setCurrencyType(TAccountPart6.CurrencyType.USD);
accountForPart6.setCurrencyType(TAccountPart6.CurrencyType.NOK);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccountPart7 {
    static CurrencyType = {
        NOK: "NOK",
        EUR: "EUR",
        USD: "USD",
        GBP: "GBP",
    };

    static CurrencyRateToNok = {
        NOK: 1,
        EUR: 11.5,
        USD: 10.5,
        GBP: 13.2,
    };

    #currencyType = TAccountPart7.CurrencyType.NOK;

    constructor(type, balance = 0){
        this.type = type;
        this.balance = balance;
    }

    #convertCurrency(amount, fromCurrency, toCurrency){
        const fromRate = TAccountPart7.CurrencyRateToNok[fromCurrency];
        const toRate = TAccountPart7.CurrencyRateToNok[toCurrency];

        const amountInNok = amount * fromRate;
        return amountInNok / toRate;
    }

    setCurrencyType(newCurrencyType){
        if(this.#currencyType === newCurrencyType){
            return;
        }

        const oldCurrency = this.#currencyType;
        this.balance = this.#convertCurrency(this.balance, oldCurrency, newCurrencyType);
        this.#currencyType = newCurrencyType;

        printOut(
            "Currency changed from " + oldCurrency + " to " + this.#currencyType +
            ". Balance: " + this.balance.toFixed(2) + " " + this.#currencyType
        );
    }

    deposit(amount, currencyType = undefined){
        if(amount <= 0){
            return;
        }

        const transactionCurrency = currencyType === undefined ? TAccountPart7.CurrencyType.NOK : currencyType;
        const convertedAmount = this.#convertCurrency(amount, transactionCurrency, this.#currencyType);

        this.balance += convertedAmount;
        printOut(
            "Deposited " + amount.toFixed(2) + " " + transactionCurrency +
            ". Balance: " + this.balance.toFixed(2) + " " + this.#currencyType
        );
    }

    withdraw(amount, currencyType = undefined){
        if(amount <= 0){
            return;
        }

        const transactionCurrency = currencyType === undefined ? TAccountPart7.CurrencyType.NOK : currencyType;
        const convertedAmount = this.#convertCurrency(amount, transactionCurrency, this.#currencyType);

        if(convertedAmount > this.balance){
            printOut("Withdrawal denied: Not enough balance.");
            return;
        }

        this.balance -= convertedAmount;

        if(Math.abs(this.balance) < 0.000001){
            this.balance = 0;
        }

        printOut(
            "Withdrew " + amount.toFixed(2) + " " + transactionCurrency +
            ". Balance: " + this.balance.toFixed(2) + " " + this.#currencyType
        );
    }

    getCurrencyType(){
        return this.#currencyType;
    }

    getBalance(){
        return this.balance;
    }

    getBalanceInCurrency(targetCurrency){
        return this.#convertCurrency(this.balance, this.#currencyType, targetCurrency);
    }
}

const accountForPart7 = new TAccountPart7("Saving", 0);

accountForPart7.deposit(12, TAccountPart7.CurrencyType.USD);
accountForPart7.withdraw(10, TAccountPart7.CurrencyType.GBP);

accountForPart7.setCurrencyType(TAccountPart7.CurrencyType.EUR);
accountForPart7.setCurrencyType(TAccountPart7.CurrencyType.NOK);

const restInUsd = accountForPart7.getBalanceInCurrency(TAccountPart7.CurrencyType.USD);
accountForPart7.withdraw(restInUsd, TAccountPart7.CurrencyType.USD);

printOut("Final balance: " + accountForPart7.getBalance().toFixed(2) + " " + accountForPart7.getCurrencyType());
printOut(newLine);
