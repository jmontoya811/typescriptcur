class Invoice {
  companyProfile : string;

  constructor(public name, public city, public state) {
  this.companyProfile = name + ", " + city + ", " + state;
  }
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'State');
var amazonInvoice = new Invoice('Amazon', 'Home Sweet View', 'State');

console.log(googleInvoice.companyProfile);
console.log(amazonInvoice.companyProfile);