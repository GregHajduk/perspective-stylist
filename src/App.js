import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import {Route, Switch } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BlogPost from "./components/BlogPost";


function App() {
    const [navbar, setNavbar] = useState(false);
    const toggle = () => setNavbar(!navbar);
  return (
    <div className="App">
      <header className={navbar ?  "App__sidebar active" : "App__sidebar" }>
        <div onClick={() => toggle()} className="App__toggle">{navbar ? <FaTimes /> : <FaBars />}</div>
        <Navbar toggle={toggle}/>
      </header>
      <div className="App__content">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Projects} path="/projects" />
          <Route component={BlogPost} path="/post/:slug" />
          <Route component={Blog} path="/blog" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
