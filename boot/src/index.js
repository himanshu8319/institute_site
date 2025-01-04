import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ucb from './Ucb';


function Boot(){
  return(
    <div className="row">
            <div class="col p-3 bg-primary text-white" >
                <a href="https://web.whatsapp.com/" >HOME</a>
            </div>
            <div class="col p-3 bg-dark text-white">
                <a href="https://web.whatsapp.com/" >NEWS</a>
            </div>
            <div class="col p-3 bg-danger text-white">
                <a href="https://web.whatsapp.com/" >MENU</a>
            </div>
            </div>
  );
}

function Bike(props){
  return
    <h2>I am a {props.color} Bike</h2>;  
}

function Bat(props){
  return
    <h2>I am a {props.Brand} Bat</h2>;  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <> 
   <Ucb/>
    </>

);

