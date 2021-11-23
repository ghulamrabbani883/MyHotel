import React from "react";
import {Route,Switch} from 'react-router-dom';
import Rooms from "./Pages/Rooms";
import Gallary from "./Pages/Gallary";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Home from "./Pages/Home";
import Events from "./Pages/Events";

import Error404 from "./Pages/Error404";

function App() {
  return (
    <>

    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact  path="/rooms" component={Rooms}></Route>
    <Route  exact path="/gallary" component={Gallary}></Route>
    <Route  exact path="/events" component={Events}></Route>
    <Route  exact path="/contact" component={Contact}></Route>
    <Route  exact path="/booking" component={Booking}></Route>
    <Route component={Error404}></Route>
    </Switch>  
    </>
  );
}

export default App;
