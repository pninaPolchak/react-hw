import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import List from './features/book/List.js';
import AddForm from './features/book/Add.js';
import {getAllBook} from "./features/book/bookApi" 
import {saveInClient} from "./features/book/bookSlice" 

function App() {
  
let dispatch = useDispatch();
useEffect(() => {
    getAllBook().then(res => {
      dispatch(saveInClient(res.data))
     
    })
      .catch(err => {
        console.log(err);
      })

  }, [])

  return (
    <div >
      <List />
      <AddForm/>
      
    </div>
  );
}
export default App;