
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { Post, usePostList } from '@domain';

import { PostItem, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {

    const { errorMessage, loading, postList, refetch } = usePostList();

    function renderItem({ item }: ListRenderItemInfo<Post>) {
        return (

            <PostItem post={item} />
        );
    }

    return (
        <Screen style={$screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ flex: postList?.length === 0 ? 1 : undefined }}
                ListHeaderComponent={<HomeHeader />}
                ListEmptyComponent={<HomeEmpty refetch={refetch} loading={loading} error={errorMessage} />}
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
