
import './Header.scss';
import redditLogo from '../../assets/redditBot.png'
import vLogo from '../../assets/vlogo.png'
import search from "../../assets/search.png"
import comment from "../../assets/comment.png"
import about from "../../assets/about.png"

import React from 'react'
export const Header = () => {


  return (
    <>
      <div className="header">
        {/* <img className="header__logo--reddit" src={redditLogo} /> */}
        <img className="header__logo--vegan" src={vLogo} />
        <h1 className="header__title">egan Reddit bot</h1>
      </div>
      <div className="header__nav">
        <img className="header__logo--reddit" src={redditLogo}  />
        <img className="header__logo--comment" src={comment} />
        <img className="header__logo--about" src={about} />
      </div>
    </>
  );
}
