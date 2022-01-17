import logo from './Images/keep_app.png';
import './App.css';
import react from 'react';



const Header=()=>{
  return(
  <div className='header'>
    <img  className='image'src={logo} alt='logo Icon'></img>
     <h1>GoogleKeep</h1>
  </div>
  );
}

export default Header;