import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.reducer';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;

// import './product-card.styles.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCartItems } from '../../store/cart/cart.selector';
// import { addItemToCart } from '../../store/cart/cart.reducer';
// import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// const ProductCard = ({ product }) => {
//   const { name, price, imageUrl } = product;
//   const cartItems = useSelector(selectCartItems);
//   const dispatch = useDispatch();
//   const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
//   return (
//     <div className="product-card-container">
//       <img src={imageUrl} alt={`${name}`} />
//       <div className="footer">
//         <span className="name">{name}</span>
//         <span className="price">{price}</span>
//       </div>
//       <Button
//         buttonType={BUTTON_TYPE_CLASSES.inverted}
//         onClick={addProductToCart}
//       >
//         Add to card
//       </Button>
//     </div>
//   );
// };

// export default ProductCard;
