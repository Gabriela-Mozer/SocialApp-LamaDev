import "./rightbar.css";
import CakeIcon from "@mui/icons-material/Cake";
import { Users } from "../../dumnyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <CakeIcon className="cakeIcon" />
          <span className="birthdayText">
            <b>Heinz Doofenshmirtz</b> and <b>4 other friends</b> have a
            birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/Piwo.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rigthbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              Complicated (I love myself)
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/pics/great.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">James Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/pics/great.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Zoey Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/pics/gray.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jinx Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/pics/nongurl.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Gurlz Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/pics/nongurl.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Zoey Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/pics/gray.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Zoey Doe</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
        {/* <ProfileRightBar /> */}
        {/*  */}
      </div>
    </div>
  );
}
