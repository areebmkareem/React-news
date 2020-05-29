import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {truncateString} from '../../../../../Utils';

const StringLengthLimit = 50;

const CardTextArea = ({article, ...props}) => {
  const [isTruncateEnabled, setIsTruncatedEnabled] = React.useState(true);
  const styles = generateStyles(props);

  return (
    <View>
      <View>
        <Text>
          <Text style={styles.authorName}>
            {article.author || 'Unknown Source'}{' '}
          </Text>
          <Text>
            {truncateString(
              article.title,
              StringLengthLimit,
              isTruncateEnabled,
            )}
          </Text>
        </Text>
        {isTruncateEnabled ? (
          <TouchableOpacity
            onPress={() => setIsTruncatedEnabled(!isTruncateEnabled)}>
            <Text style={styles.moreText}>more</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => props.navigation.push('CommentScreenId')}>
          <Text style={styles.moreText}>View Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardTextArea;

const generateStyles = ({}) =>
  StyleSheet.create({
    authorName: {
      fontWeight: 'bold',
      paddingRight: 8,
    },
    moreText: {
      color: 'grey',
    },
  });
