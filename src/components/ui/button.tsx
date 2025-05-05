import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  onPress: () => void;
  customStyles?: object;
  activeOpacity?: number;
};
const Button: React.FC<Props> = props => {
  const {name} = props;
  const {customStyles} = props;
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#67AE6E',
          padding: 10,
          paddingVertical: 12,
          borderRadius: 10,
        },
        customStyles,
      ]}
      {...props}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
