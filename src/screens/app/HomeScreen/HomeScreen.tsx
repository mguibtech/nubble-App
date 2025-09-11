
import { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { Post, postService } from '@domain';

import { PostItem, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {

    const [postList, setPostList] = useState<Post[]>();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<boolean | null>(null);

    async function fetchData() {
        try {
            setLoading(true);
            const list = await postService.getPost();
            setPostList(list);
        } catch (error) {
            setErrorMessage(true);
            console.log('Error fetching posts', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

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
                ListEmptyComponent={<HomeEmpty refetch={fetchData} loading={loading} error={errorMessage} />}
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
