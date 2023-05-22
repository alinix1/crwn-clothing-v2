import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.reducer';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

// import { useDispatch, useSelector } from 'react-redux';
// import { selectCartItems } from '../../store/cart/cart.selector';
// import {
//   addItemToCart,
//   clearItemFromCart,
//   removeItemFromCart,
// } from '../../store/cart/cart.reducer';
// import { CheckoutItemContainer } from './checkout-item.styles';

// const CheckoutItem = ({ cartItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;
//   console.log(imageUrl);
//   const cartItems = useSelector(selectCartItems);
//   const dispatch = useDispatch();

//   const clearItemHandler = () =>
//     dispatch(clearItemFromCart(cartItems, cartItem));
//   const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
//   const removeItemHandler = () =>
//     dispatch(removeItemFromCart(cartItems, cartItem));
//   return (
//     <CheckoutItemContainer>
//       <div className="image-container">
//         <img src={imageUrl} alt={`${name}`} />
//       </div>
//       <span className="name">{name}</span>
//       <span className="quantity"> </span>
//       <div className="arrow" onClick={removeItemHandler}>
//         &#10094;
//       </div>

//       <span className="value">{quantity}</span>
//       <div className="arrow" onClick={addItemHandler}>
//         &#10095;
//       </div>

//       <span className="price">{price}</span>
//       <div className="remove-button" onClick={clearItemHandler}>
//         &#10005;
//       </div>
//     </CheckoutItemContainer>
//   );
// };

// export default CheckoutItem;
