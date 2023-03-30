import React from 'react';
import './CommentCard.scss';

export const CommentCard = ( {comment} ) => {
  return (
    <>
      {/* <div className="commentCard__container"> */}
        <div className="comment__container">
          <div className="comment__element--title">
            <h5>{comment.link_title}</h5>
          </div>
          <div className="comment__element--subreddit">
            <h6>{comment.subreddit}</h6>
          </div>
          <div className="comment__element--author">
            <h6>{comment.link_author}</h6>
          </div>
          <div className="comment__element--votes">
            <div className="comment__element--up">
              <h6>{comment.ups}</h6>
            </div>
            <div className="comment__element--down">
              <h6>{comment.downs}</h6>
            </div>
          </div>
          <div className="comment__element--comment">
            <p>{comment.body}</p>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
