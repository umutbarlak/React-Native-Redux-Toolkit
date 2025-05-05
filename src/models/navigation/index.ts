import {
  ADDPRODUCT,
  CART,
  COUNTER,
  PRODUCTDETAIL,
  PRODUCTS,
} from '../../utils/routes';
import {ItemCart} from '../product';

export type RootStackParamList = {
  [PRODUCTS]: undefined;
  [ADDPRODUCT]: undefined;
  [PRODUCTDETAIL]: {product: ItemCart};
  [COUNTER]: undefined;
  [CART]: undefined;
};
