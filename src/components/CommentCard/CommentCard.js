import React from 'react';
import './CommentCard.scss';
// import { Link } from "react-router-dom";
import upsIcon from '../../assets/ups.png'
import downsIcon from "../../assets/downs.jpeg";



export const CommentCard = ( {post} ) => {

  console.log(post)

  return (
    // <Link to={comment.permalink}>
    <div className="commentCard__container">
      <div className="comment__container">
        <div className="comment__container--labels">post Title</div>
        <div className="comment__element--title">
          <h5>{post.title}</h5>
        </div>
        <div className="comment__container--labels">r/subreddit</div>
        <div className="comment__element--subreddit">
          <h5>{post.author_fullname}</h5>
        </div>
        {/* <div className="comment__container--labels">post author</div>
          <div className="comment__element--author">
            <h5>{post.author}</h5>
          </div> */}
        {/* <div className="comment__container--labels">votes</div>
          <div className="comment__element--votes">
            <img src={upsIcon} className="comment__elemnet--icons-up"></img>

            <div className="comment__element--up">
              <h5>{comment.ups}</h5>
            </div>

            <img src={downsIcon} className="comment__elemnet--icons-down"></img>

            <div className="comment__element--down">
              <h5>{comment.downs}</h5>
            </div>
          </div> */}
        <div className="comment__container--labels">post content</div>
        <div className="comment__element--comment">
          <h6>{post?.selftext}</h6>
        </div>
      </div>
    </div>
    // </Link>
  );
}
