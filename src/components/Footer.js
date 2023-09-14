import React from 'react';

function Header() {
    const footerStyle = {
        position: 'absolute',
        left: '50%',
        bottom: 0,
        transform: 'translate(-50%, 0)'
    }
    const imageStyle = {
        maxHeight: 60,
        maxWidth: 60,
        margin: 1
    }

  return (
    <footer className="footer" style={footerStyle}>
      <a href="https://github.com/microvac23">
      <img src='./Images/git.webp' alt='GitHub logo' style={imageStyle} ></img>
      </a>
      <a href="https://www.instagram.com/shortybear248/">
      <img src='./Images/ig.png' alt='Instagram logo' style={imageStyle} ></img>
      </a>

      <a href='https://www.linkedin.com/in/amadeus-machuca-7a6389259/'>
      <img src='./Images/linked.webp' alt='LinkedIn logo' style={imageStyle} ></img>
      </a>
    </footer>
  );
}

export default Header;
