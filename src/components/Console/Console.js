import React from 'react'
import './Console.scss';
import '../CommentCard/CommentCard.scss'
import { CommentCard } from '../CommentCard/CommentCard';

const Console = ( { posts } ) => {
  return (
    <div className='console'>
        { posts.map((post) => {
                return <CommentCard post={post} />;
              })}
    </div>
  )
}

export default Console
