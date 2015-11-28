(function(root) {
  Form = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],
    getInitialState: function(){
      return {
        name: null,
        date: null,
        invoiceId: null,
        lineItems: [{}]
        // * Line Item: Select from autosearch/create new
        // * Name:
        // * Quantity: prefilled "1" but editable
        // * Price: Prefilled but editable
      }
    },

    handleSubmit: function(e) {
      e.preventDefault();
      if(this.isValid()){
        debugger;
        console.log("Submit should make a POST request to server to persist data")
        console.log(this.state)
        this.state.lineItems.map(function(item){console.log(item)})
        Store.addInvoice(this.state);
        Store.addListItem(this.state.lineItems);
        this.history.pushState(null,"/")
      }else{
        this.errors = "Fill out all values.";
        this.forceUpdate();
      }
    },

    isValid: function(){
      return this.state.name !==null && this.state.date !== null &&
        this.state.invoiceId !== null &&
        this.state.lineItems[0].name !== undefined
    },

    render: function(){
      var errorMessage = this.errors ?
        <div className="alert alert-danger"
        role="alert">{this.errors}</div> : null
      return(
      <div className="col-xs-offset-1 col-md-offset-2 col-sm-10 col-md-8">
        {errorMessage}
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
           <label htmlFor="Name">Customer Name</label>
           <input className="form-control" type="text" id="Name"
                  valueLink={this.linkState("name")}>
           </input>
         </div>
         <div className="form-group">
           <label htmlFor="Date">Date</label>
           <input className="form-control" type="date" id="Date"
                  valueLink={this.linkState("date")}>
           </input>
         </div>
         <div className="form-group">
           <label htmlFor="invoiceID">Invoice Number</label>
           <input className="form-control" type="text" id="invoiceID"
                  valueLink={this.linkState("invoiceId")}>
           </input>
         </div>
         <div className="form-group">
           <label>Line Items</label>
           <FormList object={this.state.lineItems}></FormList>
         </div>
         <div className="form-group">
           <input type="submit"></input>
          </div>
        </form>
      </div>
      )
    }
  })
}(this));
