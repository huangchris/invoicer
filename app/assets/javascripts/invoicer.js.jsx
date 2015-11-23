reactRender = function() {

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  ReactDOM.render(
    <Router>
      <Route path="/" component={Index}></Route>
      <Route path="/new" component={Form}></Route>
    </Router>

  , document.getElementById("content")
  )
}
