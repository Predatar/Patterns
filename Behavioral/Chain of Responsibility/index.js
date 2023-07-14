class Account {
	pay(orderPrice) {
		if(this.canPay(orderPrice)){
			console.log(`Paid ${orderPrice} using ${this.name}`);
		} else if(this.incomer) {
			console.log(`Cannot pay using ${this.name}`);
			this.incomer.pay(orderPrice)
		}
		else {
			console.log('Unfortunately, not enough money');
		}
	}

	canPay(amount) {
		return this.balance >= amount;
	}

	setNext(account) {
		this.incomer = account
	}

	show() {
		console.log(this);
	}
}

class Master extends Account {
	constructor(balance) {
		super();
		this.name = 'Master Card';
		this.balance = balance;
	}
}
class PayPal extends Account {
	constructor(balance) {
		super();
		this.name = 'PayPal';
		this.balance = balance;
	}
}
class Qiwi extends Account {
	constructor(balance) {
		super();
		this.name = 'Qiwi';
		this.balance = balance;
	}
}

const master = new Master(100);
const paypal = new PayPal(200);
const qiwi = new Qiwi(500);

master.setNext(paypal);
paypal.setNext(qiwi);

master.show();