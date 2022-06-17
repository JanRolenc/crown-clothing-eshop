// Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// After
import { createRoot } from "react-dom/client";

import React from "react";
// import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";
const rootElement = document.getElementById("root");
// const container = document.getElementById("app");
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
  // ,
  // rootElement
<<<<<<< HEAD
);
=======
);
>>>>>>> f0fcc28b73226af633c2b3d0ba9ca29be052ae5f
