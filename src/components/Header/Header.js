
import './Header.scss';
import redditLogo from '../../assets/redditBot.png'
import vLogo from '../../assets/vlogo.png'

import React from 'react'

export const Header = () => {
  return (
    <>
      <div className="header">
          <img className="header__logo--reddit" src={redditLogo} />
          <img className="header__logo--vegan" src={vLogo} />
          <h1 className='header__title' >egan Reddit bot</h1>
      </div>
    </>
  );
}
