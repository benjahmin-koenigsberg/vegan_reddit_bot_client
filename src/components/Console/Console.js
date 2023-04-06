import React from 'react'
import './Console.scss';
import '../CommentCard/CommentCard.scss'
import { CommentCard } from '../CommentCard/CommentCard';
import ScrollingText from "../ScrollingText/ScrollingText";
import '../ScrollingText/ScrollingText.scss';


const Console = ( { posts } ) => {
  return (
    <>
      <ScrollingText />
      <div className="console">
        {posts.map((post) => {
          return <CommentCard post={post} />;
        })}
      </div>
    </>
  );
}

export default Console
