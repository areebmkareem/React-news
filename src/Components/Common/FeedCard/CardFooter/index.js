import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CardActions from './CardActions';
import CardTextArea from './CardTextArea';

const CardFooter = ({article, ...props}) => {
  const styles = generateStyles(props);
  return (
    <View style={styles.container}>
      <CardActions article={article} />
      <CardTextArea article={article} {...props} />
    </View>
  );
};

export default CardFooter;

const generateStyles = ({}) =>
  StyleSheet.create({
    container: {
      minHeight: 150,
      padding: 10,
    },
    text: {},
  });
