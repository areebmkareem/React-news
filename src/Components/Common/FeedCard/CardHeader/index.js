import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Avatar from '../../Avatar';
import Button from '../../Button';

const CardHeader = props => {
  const styles = generateStyles(props);
  return (
    <View style={styles.container}>
      <View>
        <Avatar author={props.author} />
      </View>
      <View>
        <Button iconName="ios-more" />
        {/* <Icon name="ios-chatbubbles" />
        <Icon name="ios-send" /> */}
      </View>
    </View>
  );
};

export default CardHeader;

const generateStyles = ({}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      paddingHorizontal: 5,
    },
  });
