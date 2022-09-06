import "./post.css";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Users } from "../../dumnyData";
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);
  const likeHandler = () =>{
    setLike(isLiked ? like-1: like+1) //kliknięcie raz w lajka doda ilość lajków pod zjęciem o 1
    setisLiked(!isLiked) //ponowne klinięcie to odlajkowanie
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            ></img>
            <span className="postUserName">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          {/* <div className="postTopCenter"></div> */}
          <div className="postTopRight">
            <MoreVertIcon className="postVert" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon className="postLike" onClick={likeHandler}/>
            <FavoriteIcon className="postHeart"onClick={likeHandler} />
            <span className="postLikeCounter">
              {like} people liked your photo
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
