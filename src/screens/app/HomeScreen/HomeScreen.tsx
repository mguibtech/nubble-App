
import React from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl, StyleProp, ViewStyle } from 'react-native';

import { Post, usePostList } from '@domain';
import { useScrollToTop } from '@react-navigation/native';

import { PostItem, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {

    const { errorMessage, loading, postList, refresh, fetchNextPage } = usePostList();
    const flatListRef = React.useRef<FlatList<Post>>(null);
    useScrollToTop(flatListRef);

    function renderItem({ item }: ListRenderItemInfo<Post>) {
        return (

            <PostItem post={item} />
        );
    }

    return (
        <Screen style={$screen}>
            <FlatList
                ref={flatListRef}
                showsVerticalScrollIndicator={false}
                data={postList}
                keyExtractor={(item) => item.id}
                onEndReached={fetchNextPage}
                onEndReachedThreshold={0.5}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refresh} />
                }
                refreshing={loading}
                contentContainerStyle={{ flex: postList?.length === 0 ? 1 : 0 }}
                ListHeaderComponent={<HomeHeader />}
                ListEmptyComponent={<HomeEmpty refetch={refresh} loading={loading} error={errorMessage} />}
            />
        </Screen>
    );
}

const $screen: StyleProp<ViewStyle> = {
    paddingBottom: 0,
    paddingHorizontal: 0,
    paddingTop: 0,
    flex: 1,
};
