var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Mountain View', 'State');
var amazonInvoice = new Invoice('Amazon', 'Home Sweet View', 'State');
console.log(googleInvoice.companyProfile);
console.log(amazonInvoice.companyProfile);
//# sourceMappingURL=007classes.js.map