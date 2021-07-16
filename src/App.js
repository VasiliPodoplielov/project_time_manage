import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { Layout } from './application/layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {ROUTES}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
