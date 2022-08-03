import React from 'react';

function Header() {
    return (
    <nav>
        <div className="nav-wrapper #5e35b1 deep-purple darken-1">
          <a href="#" className="brand-logo">React Shop</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="collapsible.html">REPO</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;