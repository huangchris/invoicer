(function(root) {
  'use strict';
  root.FormList = React.createClass({
    getInitialState: function () {
      return {listCount: 1};
    },

    handleItemChange: function (e) {
      // make a dropdown of matching options.
      this.props.object[parseInt(e.target.dataset.id)].item = e.target.value
      this.forceUpdate();
    },

    addListItem: function (e) {
      e.preventDefault();
      // quantity = 1?
      this.props.object[this.state.listCount] = {};
      this.setState({listCount: this.state.listCount + 1})
    },

    render: function () {
      // * Line Item: Select from autosearch/create new
      // * Name:
      // * Quantity: prefilled "1" but editable
      // * Price: Prefilled but editable
      var list = []
      for (var i = 0; i < this.state.listCount; i++) {
            // not text, dropdown. --combobox:text, typing opens drowdown
            // with autocomplete, button also opens dropdown
        list.push(
          <div className="form-control" key={"lineItem"+i}>
            <label htmlFor="item">item</label>
            <input type="text" id="item" data-id={i}
                   onChange={this.handleItemChange}
                   value={this.props.object[i].item}>
            </input>
            <label htmlFor="Quantity">Quantity</label>
            <input type="text" id="Quantity" data-id={i}
                   onChange={this.handleQuantityChange}>
            </input>
            <label htmlFor="Price">Price</label>
            <input type="text" id="Price" data-id={i}
                   onChange={this.handlePriceChange}>
            </input>
          </div>
        )
      }
      return (
        <div>
          {list}
          <button className="form-control"
            onClick={this.addListItem}>Add a Line Item</button>
        </div>
      )
    }
  })
}(this));
