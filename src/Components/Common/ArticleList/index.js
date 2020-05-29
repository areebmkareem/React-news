import React from 'react';
import {FlatList, View, Text} from 'react-native';
import FeedCard from '../FeedCard';
const ArticleList = ({handlePagination, data, ...props}) => {
  return (
    <FlatList
      contentContainerStyle={{flex: data && data.length ? 0 : 1}}
      onEndReached={() => (handlePagination && handlePagination()) || {}}
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>No Data</Text>
        </View>
      }
      data={data}
      renderItem={({item}) => <FeedCard article={item} {...props} />}
      keyExtractor={item => item.id}
    />
  );
};

export default ArticleList;
