(function(root) {
  var _invoices = [{
    name: "Customer1",
    date: "2015-11-25",
    invoiceId: "I1234",
    lineItems: [{name:"Part 1", quantity: "1", price: "12.00"}]
  }];
  var _items = [{name:"", quantity: "", price: ""},
                {name: "Part 1", quantity: "1", price: "15.00"},
                {name: "Part 2", quantity: "1", price: "25.00"},
                {name: "Service 1", quantity: "1", price: "35.00"},
                {name: "Service 2", quantity: "1", price: "45.00"},];

  root.Store = {
    allInvoices: function(){
      return _invoices;
    },
    allItems: function(){
      return _items;
    },
    findItem: function(name){
      return _items.filter(function(item){
        return item.name === name;
      })[0];
    },
    findInvoice: function(id){
      return _invoices.filter(function(invoice){
        return invoice.invoiceId === id;
      })[0];
    },
    addInvoice: function(invoice){
      _invoices.push(invoice);
    },
    addListItem:function(item){
      _items.push(item);
    }
  }
}(this));
