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
        <p>&copy; Copyright 2020 Lorien Olive</p>
      </div>
    </footer>
  );
};

export default Footer;
