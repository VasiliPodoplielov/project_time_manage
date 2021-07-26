import React from 'react';
import { Header } from '../Header';

const LayoutComponent = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default LayoutComponent;
