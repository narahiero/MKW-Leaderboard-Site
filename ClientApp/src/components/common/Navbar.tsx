import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar">
      <a href="/" className={activeLink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>
        Top 10s
      </a>
      <a href="/af" className={activeLink === '/af' ? 'active' : ''} onClick={() => handleLinkClick('/af')}>
        Rankings (AF)
      </a>
      <a href="/total-time" className={activeLink === '/total-time' ? 'active' : ''} onClick={() => handleLinkClick('/total-time')}>
        Total Times
      </a>
      <a href="/charts" className={activeLink === '/charts' ? 'active' : ''} onClick={() => handleLinkClick('/charts')}>
        Charts
      </a>
      <a href="/players" className={activeLink === '/players' ? 'active' : ''} onClick={() => handleLinkClick('/players')}>
        Players A-Z
      </a>
    </div>
  );
};

export default Navbar;
