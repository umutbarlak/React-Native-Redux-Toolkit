import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {screenWidth} from '../../utils/screenSize';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';
import {ItemCart} from '../../models/product';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../models/navigation';

type Props = {
  item: ItemCart;
};

const ProductItem: React.FC<Props> = ({item}) => {
  const navigaiton =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() => navigaiton.navigate(PRODUCTDETAIL, {product: item})}
      style={{
        flex: 1,
        padding: 10,
        gap: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
      }}>
      <Image
        source={{uri: item.image}}
        width={screenWidth / 4}
        height={screenWidth / 4}
        resizeMode="cover"
        style={{borderRadius: 10}}
      />
      <View style={{flex: 1}}>
        <View style={{flex: 1, gap: 2}}>
          <Text numberOfLines={1} style={{fontSize: 20, fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'gray',
              marginBottom: 5,
            }}>
            {item.brand}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 14,
              fontWeight: '400',

              color: 'gray',
            }}>
            {item.description}
          </Text>
        </View>
        <Text style={{fontSize: 21, fontWeight: 'bold', color: '#1ba8bc'}}>
          {item.price} <Text style={{fontSize: 16}}> TL</Text>
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
