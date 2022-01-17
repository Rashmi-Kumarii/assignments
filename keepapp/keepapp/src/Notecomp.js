import './App.css';
import react from 'react';
//import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Notecomp=(props)=>{
  const deleteNote=()=>{
    props.deleteItem(props.id);
  }


  return(
      <div className="note">
        
        <h1>{props.title}</h1>
        
        <p>{props.content}</p>
        <button className='btn'onClick={deleteNote}>
          <DeleteOutlineIcon className='deleteicon'/>
        </button>
      
      </div>
  );
};
export default Notecomp;