import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/products/productItem';

import {RootState} from '../../store/store';
import Button from '../../components/ui/button';
import CartItem from '../../components/products/cartItem';

const Cart = () => {
  const {carts, totalPrice} = useSelector((state: RootState) => state.cart);

  if (carts.length === 0) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 30,
            fontWeight: '500',
            fontSize: 21,
            color: 'gray',
          }}>
          Sepetinizde hiç ürün yok.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={carts}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1.5,
              backgroundColor: 'lightgray',
            }}
          />
        )}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CartItem item={item} />}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 10,
        }}>
        <View style={{gap: 5, padding: 10}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'black',
              textAlign: 'center',
              paddingHorizontal: 10,
            }}>
            Toplam Fiyat
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: 'tomato',
              textAlign: 'center',
              paddingHorizontal: 10,
            }}>
            {totalPrice} TL
          </Text>
        </View>
        <Button
          activeOpacity={0.8}
          customStyles={{
            flexGrow: 1,
            backgroundColor: 'tomato',
          }}
          name="Sepeti Onayla"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
