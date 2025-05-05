import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ProductItem from './productItem';
import {Trash} from 'iconsax-react-native';
import {useDispatch} from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../store/slice/cartSlice';
import {ItemCart} from '../../models/product';

type Props = {
  item: ItemCart;
};

const CartItem = ({item}: Props) => {
  const dispatch = useDispatch();

  const newItem = {...item, description: ''};
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
      <ProductItem item={newItem} />
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => dispatch(removeFromCart(item.id))}
          style={{justifyContent: 'center'}}>
          <Trash size={32} color="red" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity
            onPress={() => dispatch(increaseQuantity(item.id))}
            activeOpacity={0.7}
            style={{
              backgroundColor: 'lightgray',
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 18}}>+</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => dispatch(decreaseQuantity(item.id))}
            activeOpacity={0.7}
            style={{
              backgroundColor: 'lightgray',
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 18}}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
