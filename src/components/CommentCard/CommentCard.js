import React from 'react';
import './CommentCard.scss';

export const CommentCard = ( {comment} ) => {
  return (
    <>
      <div className="commentCard__container">
        <div className="comment__container">
          <div className="comment__element--title">
            <h5>{comment.link_title}</h5>
          </div>
          <div className="comment__element--subreddit">
            <h5>{comment.subreddit}</h5>
          </div>
          <div className="comment__element--author">
            <h5>{comment.link_author}</h5>
          </div>
          <div className="comment__element--votes">
            <div className="comment__element--up">
              <h5>Ups{comment.ups}</h5>
            </div>
            <div className="comment__element--down">
              <h5>Downs {comment.downs}</h5>
            </div>
          </div>
          <div className="comment__element--comment">
            <h6>{comment.body}</h6>
          </div>
        </div>
      </div>
    </>
  );
}
