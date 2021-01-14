/**
 * Main Page
 * @author Lorien Olive
 */

import React from 'react';
import LoginForm from '../../components/LoginForm';
import Footer from '../../components/Footer';
import './styles.scss';

const Login: React.SFC = (props: any) => {
  return (
    <div className="loginPage-mainContainer">
      <div className="loginPage-container">
        <h1 className="heading">Welcome</h1>
        <LoginForm {...props} />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
