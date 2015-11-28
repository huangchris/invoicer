(function(root) {
  root.Index = React.createClass({
    getInitialState: function() {
      return {invoices: Store.allInvoices()}
    },

    clickInvoice: function(e){
      e.preventDefault();
      var invoice = Store.findInvoice(e.target.dataset.id);
      debugger;
      // var total = invoice.lineItems.reduce(function(accum, item){
      //   return accum + (parseFloat(item.price) * parseInt(item.quantity))
      // })
      var total = 0;
      var lineItemsFormat = invoice.lineItems.map(function(lineItem, idx){
        total += parseFloat(lineItem.price) * parseFloat(lineItem.quantity);
        var printTotal = (idx === invoice.lineItems.length - 1 ? total.toFixed(2) : "");
        return [lineItem.name, lineItem.quantity, lineItem.price, printTotal];
      })
      var docDefinition  = {content: [
        {text: "Invoice", fontSize:22, bold: true, alignment: "center"},
        {columns: [
          "Name: "+invoice.name,"Date: " + invoice.date,"ID: " + invoice.invoiceId
        ]},
         {table:{
           headerRows: 1, widths: "*",
            body: [["Item", "quantity", "price", "total"]].concat(lineItemsFormat)
            }
         }
      ]}
      pdfMake.createPdf(docDefinition).open();
    },

    render: function() {
      var invoices = this.state.invoices.map(function(invoice){
        return <a href="#"
                  className="list-group-item"
                  onClick={this.clickInvoice}
                  key={invoice.invoiceId}
                  data-id={invoice.invoiceId}
                  >{invoice.invoiceId + ", " + invoice.date}
                </a>
      }.bind(this))
      return <div className="col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10">
        <h3>Saved Invoices</h3>
        <div className="list-group">
          {invoices}
        </div>
      </div>
    }
  })
}(this));
