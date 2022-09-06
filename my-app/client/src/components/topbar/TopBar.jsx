import "./topbar.css";
//import {} from  '@mui/icons-material'


import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import { AiOutlineSearch } from "react-icons/ai";
export default function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">PepeSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <AiOutlineSearch className="searchIcon"/>
          <input
            placeholder="Search for friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsActiveIcon />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/pics/gray.png" alt=""className="topbarImg" />
      </div>
    </div>
  );
}
