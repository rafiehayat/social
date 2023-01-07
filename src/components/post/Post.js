import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
            <span className="postUsername">Rafie Hayat</span>
            <span className="postDate">{post?.dates}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post?.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like1.png" alt="" />
            <img className="likeIcon" src="assets/like.png" alt="" />
            <span className="postLikeCounter">{post?.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
