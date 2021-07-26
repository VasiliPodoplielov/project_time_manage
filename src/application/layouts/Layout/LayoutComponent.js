import React from 'react';
import { Header } from '../Header';
import classes from './Layout.module.css';

const LayoutComponent = ({ children }) => (
  <div>
    <Header />
    <div className={classes.wrapper}>
      {children}
    </div>
  </div>
);

export default LayoutComponent;
