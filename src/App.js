import React from "react";
import {ROUTES} from "./routes";
import {Layout} from "./application/layouts/Layout";
import {BrowserRouter} from "react-router-dom";

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
