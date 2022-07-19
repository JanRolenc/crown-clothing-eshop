import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

// import "./navigation.style.scss";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.style";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);//po zavedeni redux nahrazujeme za useSelector
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      {/* <div className="navigation"> */}
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            // <span className="nav-link" onClick={signOutUser}>
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
        {/* </div> */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
