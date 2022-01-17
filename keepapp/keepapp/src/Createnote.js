import "./App.css";
import react, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const Createnote = (props) => {
 const [expand,setExpand]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
 
  const InputEvent=(event)=>{
    //destructuring
    const{name,value}=event.target;

    setNote((prevData)=>{
      return{
      //spread operator
      ...prevData,
      [name]:value,
      };
    });
    //console.log(note);
  };

  const addEvent=()=>{
    props.passnote(note);
    setNote({
      title: "",
      content: "",
    });
  }

  const expandIt=()=>{
    setExpand(true);
  }
  const btoNormal=()=>{
    setExpand(false);
  }
  return (
    <div className="main_note" onDoubleClick={btoNormal}>
      <form>
        {expand?
        <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" />
        :null}
        <textarea rows="" cols=""  name="content" value={note.content} onChange={InputEvent}  placeholder="Write a note.." 
        onClick={expandIt}
         />
        {expand?
        <Button onClick={addEvent}>
          <AddIcon className="plus_sign" />
        </Button>
        :null}
      </form>
    </div>
  );
};
export default Createnote;
