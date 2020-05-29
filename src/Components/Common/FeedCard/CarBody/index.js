import React from 'react';
import {View, StyleSheet, Text, Image, ActivityIndicator} from 'react-native';

const CardBody = ({imageUrl, ...props}) => {
  const styles = generateStyles(props);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  );
};

export default CardBody;

const generateStyles = ({}) =>
  StyleSheet.create({
    container: {
      height: 300,
      backgroundColor: '#D3D3D3',
    },
    image: {
      height: '100%',
      width: '100%',
    },
    text: {},
  });
