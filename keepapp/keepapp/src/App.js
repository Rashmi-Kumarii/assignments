
import './App.css';
import react, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Notecomp from './Notecomp';
import { Note } from '@mui/icons-material';


const App=()=>{
  const [addItem,setAddItem]=useState([]);


  const addNote=(note)=>{
    //alert("I am clicked");
    setAddItem((prevData)=>{
      return [...prevData,note];
      //spreadoperator
     
      });
      //console.log(note);
  }
  const onDelete=(id)=>{
    setAddItem((oldData)=>{
      oldData.filter((currdata,indx)=>{
        return indx!==id;
      })
    
    })
  }

  return <>
  <Header/>
  <Footer/>
  <Createnote passnote={addNote}/>
  
  {addItem.map((val,index)=>{
    return (
    <Notecomp
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
  />
  );
  })}



  </>;
};

export default App;
