/**
 * Footer Component
 * @author Lorien Olive
 */

import React from 'react';
import './styles.scss';

const Footer: React.SFC<any> = props => {
  return (
    <footer className="footer">
      <div className="footer-text-container">
        <p>
          &copy; Copyright 2020{' '}
          <a href="https://twitter.com/AnuragG94634191">Anurag Garg</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
