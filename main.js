'use strict'
const assert = require('assert');

class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }

    balance() {
        //balace is computed by summing up the ammounts in the transactions array
        let currentBalance = 0;
        for (let i = 0; i < this.transactions.length; i++) {
            currentBalance += this.transactions[i].amount
        }

    }

    deposit(amt) {
        //should not be able to deposit a negative amount
        //create a new transaction and add it to the transaction array
        if (amt <= 0) {
            console.log('deposit must be at least a penny')
        } else {
            let newDeposit = new Transaction(amt, 'Deposit');
            this.transactions.push(newDeposit);
            //create a new transaction with deposit as pay
            //push to the transactions array
        }
    }

    Charge(payee, amt) {
        //you should not be able to charge an amount
        //that would make your balance dip below zero
        let newCharge = new Transaction(amt, payee);

        if (newCharge > this.balance) {
            console.log('You do not have enough funds in your account.')
        } else {
            this.transactions.push(newCharge)
        }
    }
}


class Transaction {
    constructor(amount, payee) {
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}

//TESTs

if (typeof describe === 'function') {
    describe('BankAccount', function () {
        it('should have a acount number, owner name, and a transaction list', function () {
            // this creates a new BankAccount and passes the following arguments into its constructor:
            // '12345', 'Louis'
            const BankAccount1 = new BankAccount('12345', 'Louis');
            assert.equal(BankAccount1.accountNumber, '12345');
            assert.equal(BankAccount1.owner, 'Louis');
            //assert.equal(BankAccount1.transactions);
        });
        describe('Transaction', function () {
            it('should create transaction correctly for a deposit', function () {
                //create a new BankAccount and passes the following arguments into its constructor:
                // '12345', 'Louis'
                const newDeposit = new Transaction(50, 'Deposit');
                assert.equal(newDeposit.amount, 50);
                assert.equal(newDeposit.payee, 'Deposit');
            });

            it('should create transaction correctly for a deposit', function () {
                //create a new instance
                const Transaction2 = new Transaction(40, 'HEB');
                assert.equal(Transaction2.amount, 40);
                assert.equal(Transaction2.payee, 'HEB');
            });
        });
    });
}
