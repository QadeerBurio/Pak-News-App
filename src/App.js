
import './App.css';

import React, { useState } from 'react'  ///, { Component }
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
 const pageSize=50;
 const country='us';
 const[progress, setProgress]=useState(0);
  // state={
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
 
    return (
      <div>
        <Router>
        <Navbar/>
       
        <LoadingBar
         height={3}
        color='#ff0000'
        progress={progress}
       
      />
      
        <Switch>
          <Route exact path="/"><News  setProgress={setProgress}  key="general" pageSize={pageSize} country={country} category="general"/></Route>
          <Route exact path="/business"><News  setProgress={setProgress}   key="business"  pageSize={pageSize} country={country} category="business"/></Route>
          <Route exact path="/entertainment"><News  setProgress={setProgress}   key="entertainment"  pageSize={pageSize} country={country} category="entertainment"/></Route>
          <Route exact path="/general"><News  setProgress={setProgress}   key="general"  pageSize={pageSize} country={country} category="general"/></Route>
          <Route exact path="/health"><News  setProgress={setProgress}   key="health"  pageSize={pageSize} country={country} category="health"/></Route>
          <Route exact path="/sports"><News  setProgress={setProgress}   key="sports"  pageSize={pageSize} country={country} category="sports"/></Route>
          <Route exact path="/science"><News  setProgress={setProgress}   key="science"  pageSize={pageSize} country={country} category="science"/></Route>
          <Route exact path="/technology"><News  setProgress={setProgress}   key="technology"  pageSize={pageSize} country={country} category="technology"/></Route>
           
         
        </Switch>
        </Router>
      </div>
    )
  }
  export default App;


