import React from 'react';
import '../CommentCard/CommentCard.scss';
import { Link } from "react-router-dom";
import upsIcon from '../../assets/ups.png'
import downsIcon from "../../assets/downs.jpeg";



export const BotComments = ( {comment} ) => {
return (
    <Link to={comment.link_permalink}>
      <div className="commentCard__container">
        <div className="comment__container">
          <div className="comment__container--labels">post Title</div>
          <div className="comment__element--title">
            <h5>{comment.link_title}</h5>
          </div>
          <div className="comment__container--labels">r/subreddit</div>
          <div className="comment__element--subreddit">
            <h5>{comment.subreddit}</h5>
          </div>
          {/* <div className="comment__container--labels">post author</div>
          <div className="comment__element--author">
            <h5>{comment.link_author}</h5>
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
          <div className="comment__container--labels">comment</div>
          <div className="comment__element--comment">
            <h6 >{comment.body}</h6>
          </div>
        </div>
      </div>
    </Link>
  );
}
