import {Alert, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Input from '../../components/ui/input';
import {Formik} from 'formik';
import Button from '../../components/ui/button';
import * as Yup from 'yup';
import MyImagePicker from '../../components/ui/imagePicker';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../store/slice/productsSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ItemCart} from '../../models/product';
import {RootStackParamList} from '../../models/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Ürün Ekle'>;

const AddProduct: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const productSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Çok kısa!')
      .max(30, 'Çok uzun!')
      .required('Zorunlu '),
    brand: Yup.string()
      .min(5, 'Çok kısa!')
      .max(20, 'Çok uzun!')
      .required('Zorunlu '),
    description: Yup.string()
      .min(5, 'Çok kısa!')
      .max(50, 'Çok uzun!')
      .required('Zorunlu '),
    price: Yup.string().required('Zorunlu '),
    image: Yup.string().required('Zorunlu '),
  });

  const handleAddProduct = (item: ItemCart) => {
    dispatch(addProduct(item));

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
      <ScrollView style={{padding: 10, flex: 1}}>
        <Formik
          validationSchema={productSchema}
          initialValues={{
            id: Math.random().toString(36).substring(2, 9),
            name: 'Kullaklık',
            description: 'Açıklama faln filan',
            price: '760',
            brand: 'İphone',
            image: '',
            quantity: 1,
          }}
          onSubmit={values => {
            handleAddProduct(values);
          }}>
          {({
            values,
            handleChange,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
          }) => (
            <>
              <View style={{gap: 20, flex: 1}}>
                <Input
                  error={touched.name ? errors.name : ''}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  label={'Ürün ismi'}
                />
                <Input
                  error={touched.brand ? errors.brand : ''}
                  onChangeText={handleChange('brand')}
                  value={values.brand}
                  label={'Ürün markası'}
                />
                <Input
                  error={touched.description ? errors.description : ''}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  label={'Ürün Açıklaması'}
                />
                <Input
                  error={touched.price ? errors.price : ''}
                  onChangeText={handleChange('price')}
                  value={values.price}
                  label={'Ürün Fiyatı'}
                />
                <MyImagePicker
                  error={touched.image ? errors.image : ''}
                  onChangeText={handleChange('image')}
                  value={values.image}
                  label="Ürün Resmi"
                  placeholder="Ürün Resmi Seçiniz"
                  handleSelectImage={image => setFieldValue('image', image)}
                />
              </View>
              <Button onPress={handleSubmit} name={'Kaydet'} />
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({});
