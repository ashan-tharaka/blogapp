
import Navbar from "./Navbar";
import Home from "./Home";
import create from "./Create";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {

  return (
      <Router>
          <div className="App">
              <Navbar/>

              <div className="content">
                  <Switch>
                      <Route exact path="/">
                          <Home/>
                      </Route>
                      <Route path="/create" component={create}/>
                      <Route path="/blogs/:id" component={BlogDetails}/>
                      <Route path="*"><NotFound/></Route>
                  </Switch>

              </div>

          </div>
      </Router>

  );
}

export default App;
