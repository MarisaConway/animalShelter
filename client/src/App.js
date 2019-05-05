import React from 'react';
import './App.css';
import 'react-router';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import DashBoard from './components/DashBoard';
// import EditPet from './components/EditPet';
import PetForm from './components/PetForm';
// import ViewPet from './components/ViewPet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Route exact path="/" component= {DashBoard} />
        <Route path="/pets/new" component= {PetForm} />
        {/* <Route path="/pet/:_id/edit" component= {EditPet} />
        <Route exact path="/pet/:_id" component= {ViewPet} />  */}
      </Router>
    </div>
  );
}

export default App;
