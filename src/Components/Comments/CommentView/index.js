import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CommentView = ({comment, ...props}) => {
  const styles = generateStyles(props);

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{uri: 'https://img.icons8.com/clouds/2x/user.png'}}
      />
      <Text style={styles.author}>{comment.username}</Text>
      <Text>{comment.comments}</Text>
    </View>
  );
};

export default CommentView;
const generateStyles = ({}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    avatar: {
      width: 35,
      height: 35,
      borderRadius: 35 / 2,
      borderWidth: 1,
      borderColor: 'grey',
      marginRight: 5,
    },
    author: {
      fontWeight: 'bold',
      marginRight: 5,
    },
  });
