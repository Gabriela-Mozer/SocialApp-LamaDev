import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import AddReactionIcon from '@mui/icons-material/AddReaction';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/pics/purplelo.png"
            alt=""
          />
          <input
            placeholder="What's in your mind?"
            className="shareInput"
          ></input>
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
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
