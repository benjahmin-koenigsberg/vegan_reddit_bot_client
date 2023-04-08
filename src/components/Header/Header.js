
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import './Header.scss';
import redditLogo from '../../assets/redditBot.png'
import vLogo from '../../assets/vlogo.png'
import comment from "../../assets/comment.png"
import about from "../../assets/about.png"
import React from 'react'


export const Header = ( {posts, setPosts} ) => {

  const navigation = useNavigate();
  const navigateHome = () =>  {
    console.log(posts)
    const shuffleArr = posts.splicle().sort((a, b) => 0.5 - Math.random());
    setPosts( shuffleArr );
  // axios
  //   .get("https://vegan-reddit-troll-server.vercel.app/")
  //   .then((res) => {
  //    console.log(res.data);
  //     setPosts(res.data);
  //   })
  //   .catch((err) => console.log(err));
  navigation("/")  }
  const navigateComments = () =>  {navigation("/comments");}
  const navigateAbout = () => {   navigation("/about");}

  return (

    <>
      <div className="header">
        <img className="header__logo--vegan" src={vLogo} />
        <h1 className="header__title">egan Reddit bot</h1>
      </div>
      <div className="header__nav">
        <img className="header__logo--reddit" src={redditLogo} onClick={navigateHome} alt="angry reddit logo" />
        <img className="header__logo--comment" src={comment} onClick={navigateComments} alt="comment icon" />
        <img className="header__logo--about" src={about} onClick={navigateAbout} alt="about icon"/>
      </div>
    </>
  );
}
