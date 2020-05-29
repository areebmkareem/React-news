import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../../Button';
import {connect} from 'react-redux';
import {upsertSavedArticles} from '../../../../../Store/Actions/News';
const CardActions = props => {
  const styles = generateStyles(props);

  const handleBookMarkChange = article => {
    props.upsertSavedArticles(article);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftActions}>
        <Button iconName="ios-heart-empty" />
        <Button iconName="ios-chatbubbles" />
        <Button iconName="ios-send" />
      </View>

      <View style={styles.leftActions}>
        <Button
          iconName="ios-bookmark"
          onPress={() => handleBookMarkChange(props.article)}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    upsertSavedArticles: payload => dispatch(upsertSavedArticles(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardActions);

const generateStyles = ({}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {},
    leftActions: {
      flexDirection: 'row',
    },
  });
