import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useState } from "react";

export default function Share(props) {
  const [input, setInput]= useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() *1000),
      text: input
    });
    setInput('')
   
  }
  const handleChange=(e) =>{
    setInput(e.target.value)
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/pics/purplelo.png"
            alt=""
          />
          <form onSubmit={handleSubmit}>
            <input
            placeholder="What's in your mind?"
            className="shareInput"
            value={input}
            onChange={handleChange}
          ></input>
          </form>
          
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
                <PermMediaIcon htmlColor="#8F3A84" className="shareMedia"/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
                <LabelIcon htmlColor="##5C2655" className="shareMedia"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
                <RoomIcon htmlColor="#1F041C" className="shareMedia"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
                <AddReactionIcon htmlColor="#DFD31E" className="shareMedia"/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={handleSubmit}>Share</button>
        </div>
      </div>
    </div>
  );
}
