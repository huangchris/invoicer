1. User can click a button/link to create invoice.
2. User can specify customer name, date and invoice number.
3. User can add multiple line items by selecting products from a
  product search component.
4. Products/line items include Product Name, Quantity, Price, Total
5. Line item fields for Quantity and Price are editable.
6. Form is auto-saved or provides a Save button the user can click.


###Navbar: "Invoice Generator, v 0.0", Index, Create
###Root: 2 big buttons, index and create.
###Index
* ("you have none saved!" or .pdf thumbnails (possible? _probably not, with drafts_ li w/ InvoiceID, name, date) ) _sort by date_
  _Sort into Drafts and final_
  * final opens .pdf
  * draft opens create form
### Create:
#### Form
    * Customer Name:
    * Date:
    * Invoice Number: _autogenerated?_
    * Line Item: Select from autosearch/create new
    * Name:
    * Quantity: prefilled "1" but editable
    * Price: Prefilled but editable

#### Autosave: use React linkedStateMixin valueLink={this.linkState("name")}
    * Submit when button is clicked or componentWillUnMount
    _Needs a "Finalize" button then, if it's autosaving?_

### Stack:
  * RoR -- try replacing with Node.js Express later
  * React
  * Bootstrap

### Gems/Libraries
  * Puma
  _PDF builder_


  1. create itemStore, have formList pull from it
    a. So would formList check if an item is in Store when it submits?
    and if not, make a new request to add the item? Or is that handled by
    server, which then sends an updated list to the itemStore.
  2. handleChange methods for all 3 items.
    a. 2 are copy/paste, then item needs to implement autocomplete dropdown
    of itemStore.all().select(matches item)
    --wait. state is list that matches, so clicking the button can set
    dropdown revealed to true, and list to whole list.
    if set is empty, put a message _in italics ideally_
  3.  handleSubmit: console.log("this would save it")
      invoiceStore.add data
      // check validity first
  4. pdfCreator.
