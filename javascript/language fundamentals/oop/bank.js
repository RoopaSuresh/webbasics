



class bank {
    createAccount(acno, pName, pan, branch, phone, bal) {
        this.accountNumber = acno;
        this.personName = pName;
        this.pan = pan;
        this.branch = branch;
        this.phoneNumber = phone;
        this.balance = bal;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`transaction failed. insufficient balance on your ${this.accountNumber}`);
        }
        else {
            this.balance -= amount;
            console.log(`your account ${this.accountNumber} has been debited with amount ${amount} you avail bal ${this.balance}`);
        }
    }
    deposit(amount) {
        this.bal += amount;
        console.log(`your account ${this.accountNumber} has been credited with amount ${amount} you avail bal ${this.balance}`);

    }
    balanceEnquiry() {
        console.log(`your avail bal=${this.balance}`);
    }
}



var bank1 = new bank()
bank1.createAccount(1010, "awan", 1234, "ooty", 123345, 2000)
bank1.withdraw(10000)
bank1.deposit(3000)
bank1.balanceEnquiry()