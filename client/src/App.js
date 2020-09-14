import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store"
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/dashboard/home/Home";

class App extends Component {
  

  render() {
   
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Home />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
