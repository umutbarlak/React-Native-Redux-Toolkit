import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import appStyle from '../../styles';
import ProductItem from '../../components/products/productItem';
import {RootState} from '../../store/store';

const Products = () => {
  const {products} = useSelector((state: RootState) => state.product);

  console.log(products);
  return (
    <SafeAreaView style={appStyle.container}>
      <FlatList
        contentContainerStyle={{padding: 10, gap: 20}}
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        ListEmptyComponent={() => <Text>Hünüz bir ürün yok</Text>}
      />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({});
