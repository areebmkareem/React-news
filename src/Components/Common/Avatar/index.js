import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const AvatarSize = 30;

const Avatar = ({author, ...props}) => {
  const styles = generateStyles(props);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSahD3v2mWFJBzH3iY4VBho8CrKeNCfanDhm9p4xP7M1eZFqDjQ&usqp=CAU',
          }}
        />
      </View>
      <View>
        <Text style={styles.text}>{author || 'Unknown Source'}</Text>
      </View>
    </View>
  );
};

export default Avatar;

const generateStyles = ({}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      paddingHorizontal: 5,
    },
    avatar: {
      width: AvatarSize,
      height: AvatarSize,
      borderRadius: AvatarSize / 2,
    },
  });
