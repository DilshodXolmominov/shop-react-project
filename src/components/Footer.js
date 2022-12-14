import React from 'react';

function Footer() {
    return (
        <footer className="page-footer #5e35b1 deep-purple darken-1">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;