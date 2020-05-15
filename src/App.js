<<<<<<< HEAD
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 className="alert alert-warning">Welcome to my project board</h1>
    </div>
  );
}

export default App;
=======
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import ProjectBoard from './components/ProjectBoard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProjectBoard />
    </div>
  );
}

export default App;
>>>>>>> 3d74a78cc95b1b9b3e97d0d8005b2fd7fae8abf8
