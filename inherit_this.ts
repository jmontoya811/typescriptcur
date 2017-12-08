class Report {
  companyProfile : string;

  constructor(public name : string) {
  	this.companyProfile = name;
  }
}

class Invoice extends Report {
  constructor(public name : string, public total : number) { super(name); }

  printInvoice() {
  	return this.name + ", " + this.total;
  }
}

class BillOfLading extends Report {
  constructor(public name : string, public city : string, public state : string) { super(name); }
}

var invoice = new Invoice('Google', 200);

console.log(invoice.printInvoice());