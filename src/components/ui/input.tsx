import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

type Props = {
  label: string;
  value: string;
  error: string | undefined;
  onChangeText: (text: string) => void;
};

const Input: React.FC<Props> = prop => {
  const {label} = prop;
  const {error} = prop;
  return (
    <View style={{gap: 5}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'gray'}}>
        {label}
      </Text>
      <TextInput
        {...prop}
        style={{padding: 15, backgroundColor: 'white', borderRadius: 10}}
      />
      {error && (
        <Text style={{fontSize: 12, fontWeight: '400', color: 'red'}}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
