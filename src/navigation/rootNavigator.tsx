import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDPRODUCT,
  CART,
  COUNTER,
  PRODUCTDETAIL,
  PRODUCTS,
} from '../utils/routes';
import Products from '../screens/products';
import AddProduct from '../screens/products/addProduct';
import {Pressable, Text, View} from 'react-native';
import {AddSquare, ShoppingCart} from 'iconsax-react-native';
import ProductDetail from '../screens/products/productDetail';
import Cart from '../screens/products/cart';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {RootStackParamList} from '../models/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const {carts} = useSelector((state: RootState) => state.cart);
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <View style={{flexDirection: 'row', gap: 10, paddingVertical: 10}}>
              <Pressable onPress={() => navigation.navigate(ADDPRODUCT)}>
                <AddSquare size={28} color="#111" />
              </Pressable>
              <Pressable
                style={{position: 'relative'}}
                onPress={() => navigation.navigate(CART)}>
                <ShoppingCart size={28} color="#111" />
                <View
                  style={{
                    position: 'absolute',
                    width: 18,
                    height: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'tomato',
                    right: -8,
                    top: -8,
                    borderRadius: 100,
                  }}>
                  <Text style={{color: 'white'}}>{carts.length}</Text>
                </View>
              </Pressable>
            </View>
          ),
        })}
        name={PRODUCTS}
        component={Products}
      />
      <Stack.Screen name={ADDPRODUCT} component={AddProduct} />
      <Stack.Screen name={PRODUCTDETAIL} component={ProductDetail} />
      <Stack.Screen name={CART} component={Cart} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
