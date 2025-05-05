import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  error: string | undefined;
  onChangeText: (text: string) => void;
  handleSelectImage: (image: string | undefined) => void;
};

const MyImagePicker: React.FC<Props> = ({
  label,
  placeholder,
  error,
  handleSelectImage,
  value,
}) => {
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      handleSelectImage(image.sourceURL);
    });
  };

  return (
    <View style={{gap: 5}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'gray'}}>
        {label}
      </Text>
      <Pressable
        onPress={selectImage}
        style={{
          minHeight: 200,
          backgroundColor: 'white',
          width: '100%',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        {!value ? (
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'gray'}}>
            {placeholder}
          </Text>
        ) : (
          <Image
            resizeMode="contain"
            source={{uri: value}}
            style={{width: '100%', height: 200, borderRadius: 30}}
          />
        )}
        {error && (
          <Text style={{fontSize: 18, fontWeight: '500', color: 'red'}}>
            {error}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default MyImagePicker;

const styles = StyleSheet.create({});
