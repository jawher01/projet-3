import { useEffect } from "react";
import Signup from "./Components/Signup/signup";
import { Switch, Route, Link } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import PrivateRoute from "./Components/router/PrivateRoute";
import { useDispatch } from "react-redux";
import { current } from "./js/actions/user";
import Publication from "./Components/publication/PublicatinList"
import "./App.css";
import Add from "./Components/publication/Add";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signup} />
        <PrivateRoute path="/dashbord" component={Dashbord} />
        <Route exact path="/publication" component={Publication} />
        <Route path={["/publication/add", "/publication/edit/:id"]} component={Add} />
      </Switch>



    </div >
  );
}

export default App;
