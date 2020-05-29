import React from 'react';

import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const Icon = ({name}) => (
  <Ionicons name={name} size={26} color="black" />
);
const Button = ({iconName, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => (onPress && onPress()) || {}}
      style={{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={iconName} />
    </TouchableOpacity>
  );
};

export default Button;
