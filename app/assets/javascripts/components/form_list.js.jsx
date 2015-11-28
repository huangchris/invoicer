(function(root) {
  'use strict';
  root.FormList = React.createClass({
    getInitialState: function () {
      return {listCount: 1, items: Store.allItems()};
    },

    handleItemChange: function (e) {
      var listNum = parseInt(e.target.dataset.id)
      this.props.object[listNum] = Store.findItem(e.target.value)
      this.forceUpdate();
    },

    handleQuantityChange: function (e) {
      this.props.object[parseInt(e.target.dataset.id)].quantity = e.target.value
      this.forceUpdate();
    },

    handlePriceChange: function (e) {
      this.props.object[parseInt(e.target.dataset.id)].price = e.target.value.toFixed(2)
      this.forceUpdate();
    },

    addListItem: function (e) {
      e.preventDefault();
      this.props.object[this.state.listCount] = {};
      this.setState({listCount: this.state.listCount + 1})
    },

    // put this back when I get the styling to work.
    // componentDidUpdate: function(){
    //   $("select.combobox").combobox();
    // },
    //
    // componentDidMount: function(){
    //   // ensure Store is updated with current list of lineItems--not needed for mockup
    //   // APIUtil.fetchItems();
    //   $("select.combobox").combobox();
    // },

    render: function () {
      // * Line Item: Select from autosearch/create new
      // * Name:
      // * Quantity: prefilled "1" but editable
      // * Price: Prefilled but editable
      var list = [];
      var dropdownList = this.state.items.map(function(item){
        return <option key={item.name}>{item.name}</option>
      })
      for (var i = 0; i < this.state.listCount; i++) {
            // not text, dropdown. --combobox:text, typing opens drowdown
            // with autocomplete, button also opens dropdown
        list.push(
          <div className="form-control" key={"lineItem"+i}>
            <select data-id={i} id={"item"} className="combobox"
              onChange={this.handleItemChange}
              value={this.props.object[i].item}>
              {dropdownList}
            </select>
            <label>Qty.</label>
            <input type="text" id="Quantity" data-id={i}
                   onChange={this.handleQuantityChange}
                   value={this.props.object[i].quantity}>
            </input>
            <label>Price</label>
            <input type="text" id="Price" data-id={i}
                   onChange={this.handlePriceChange}
                   value={this.props.object[i].price}>
            </input>
          </div>
        )
      }
      return (
        <div >
          {list}
          <button className="form-control"
            onClick={this.addListItem}>Add a Line Item</button>
        </div>
      )
    }
  })
}(this));
