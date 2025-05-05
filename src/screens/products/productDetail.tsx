import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {screenWidth} from '../../utils/screenSize';
import Button from '../../components/ui/button';
import {useDispatch} from 'react-redux';
import {addCart} from '../../store/slice/cartSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../models/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Ürün Detayı'>;

const ProductDetail = ({route, navigation}: Props) => {
  const {product} = route.params;
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addCart(product));

    Alert.alert('Ürün Eklendi', 'Ürün başarılı bir şekilde eklendi', [
      {
        text: 'Yeni Ekle',
        onPress: () => console.log('Ask me later pressed'),
      },
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Image
          source={{uri: product.image}}
          width={screenWidth}
          height={screenWidth}
          resizeMode="cover"
          style={{borderRadius: 10}}
        />

        <View style={{padding: 20}}>
          <Text numberOfLines={1} style={{fontSize: 24, fontWeight: 'bold'}}>
            {product.name}
          </Text>
          <Text numberOfLines={1} style={{fontSize: 18, fontWeight: 'bold'}}>
            {product.brand}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginVertical: 10,
              color: 'gray',
            }}>
            {product.description}
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: 'tomato',
          margin: 10,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'tomato',
            textAlign: 'center',
            flexShrink: 5,
            paddingHorizontal: 10,
            flex: 1,
          }}>
          {product.price} ₺
        </Text>
        <Button
          activeOpacity={0.8}
          customStyles={{flex: 2, borderRadius: 0, backgroundColor: 'tomato'}}
          name="Sepete Ekle"
          onPress={handleAddCart}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
