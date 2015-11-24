(function(root) {
  Form = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function(){
      return {
        name: null,
        date: null,
        invoiceId: null,
        lineItems: [{}],
        // * Line Item: Select from autosearch/create new
        // * Name:
        // * Quantity: prefilled "1" but editable
        // * Price: Prefilled but editable
      }
    },

    handleSubmit: function(e) {
      debugger;
      e.preventDefault();
    },

    render: function(){
      return(
      <div className="col-xs-offset-1 col-md-offset-2 col-sm-10 col-md-8 col-lg-10">
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
         <FormList object={this.state.lineItems}></FormList>
         <div className="form-group">
           <input type="submit"></input>
          </div>
        </form>
      </div>
      )
    }
  })
}(this));
