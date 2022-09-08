import "./topbar.css";
//import {} from  '@mui/icons-material'

import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import NAMES from "./data.json";
import { Users } from "../../dumnyData";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">PepeSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <AiOutlineSearch className="searchIcon" />

          <input
            type="text"
            placeholder="Search for friends, post or video"
            className="searchInput"
            // value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />

          {Users.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.username.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((item, key) => {
            return (
              <div className="searchUserContainer" >
                <ul className="searchUser">
                  <li className="searchUserPar" key={key}>
                    {item.username}
                  </li>
                </ul>
              </div>
            );
          })}
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
        <img src="/assets/pics/gray.png" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
