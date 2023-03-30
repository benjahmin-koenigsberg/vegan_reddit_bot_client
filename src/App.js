import { CommentCard } from './components/CommentCard/CommentCard';
import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function App() {

const [comments , setComments] = useState([])

useEffect( ()=>{
axios.get("http://localhost:8000/comments")
.then( res => {
  setComments(res.data)
}).catch(err=>console.log(err))
}, [] )


  return (
    <div className='app' >
      { comments.map( comment =>  {
        return  <CommentCard comment={comment} /> } )}
    </div>
  );
}

export default App;
