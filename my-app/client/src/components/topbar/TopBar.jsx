import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from '@mui/icons-material/Close';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import { Users } from "../../dumnyData";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function TopBar({ placeholder, data }) {
  const [searchTerm, setSearchTerm] = useState([]);
  // const [hideBar, setHideBar] = useState(false);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    // e.preventDefault();
    const newFilter = data.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setSearchTerm([]);
    } else {
      setSearchTerm(newFilter);
    }
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">PepeSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          {searchTerm.length ===0? <AiOutlineSearch className="searchIcon"/> :<CloseIcon className="closeIcon"/>}
          
          <div className="searchInputs">
            <input
              type="text"
              placeholder={placeholder}
              className="searchInput"
              // value={searchTerm}
              onChange={handleFilter}
            />
          </div>
          {searchTerm.length !== 0 && (
            <div className="searchDataResult">
              {searchTerm.map((value, key) => {
                return (
                  <div className="nameResult" key={key}>
                    <p>{value.username}</p>
                  </div>
                );
              })}
            </div>
          )}
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
