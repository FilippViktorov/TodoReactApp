import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);



function App() {
  return (
    <div className= "App">
    <ToDoList></ToDoList>
    </div>
  );
}

export default App;

