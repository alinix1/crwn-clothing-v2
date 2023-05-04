import { useContext } from 'react';

import icon from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={icon} className="shopping-icon"></img>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
