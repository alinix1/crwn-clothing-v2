import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import logo from '../../assets/crown.png';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <img src={logo} alt="crown logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinks>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

//  above ^^ && operator if this evaluates to true then return last item otherwise return nothing

export default Navigation;
