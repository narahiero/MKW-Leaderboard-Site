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
      <a href="/charts" className={activeLink === '/charts' ? 'active' : ''} onClick={() => handleLinkClick('/charts')}>
        Charts
      </a>
    </div>
  );
};

export default Navbar;
