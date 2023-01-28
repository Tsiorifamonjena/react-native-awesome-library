import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { ButtonProps } from './typings';

const Button: React.FC<ButtonProps> = (props) => (
  <TouchableOpacity {...props}>
    <Text>Tsiory</Text>
  </TouchableOpacity>
);

export default Button;
