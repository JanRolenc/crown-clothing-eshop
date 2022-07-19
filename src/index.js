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
// import { UserProvider } from "./contexts/user.context";//rusime po zavedeni redux
// import { CategoriesProvider } from "./contexts/categories.context";//rusime po zavedeni redux
import { CartProvider } from "./contexts/cart.context";

import { Provider } from 'react-redux'
import { store } from './store/store'

import "./index.scss";
const rootElement = document.getElementById("root");
// const container = document.getElementById("app");
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        <CartProvider>
          <App />
        </CartProvider>
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  // ,
  // rootElement
);

