import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Join from "./components/Join/Join"
import Chat from "./components/Chat/Chat"

const App = () => (
    <Router>
        {/* //user is greeted with Join Component */}
        <Route path="/" exact component={Join} />
       {/* Once user enters data, render Chat component */}
        <Route path="/chat" component={Chat} />
    </Router>

);




export default App;
