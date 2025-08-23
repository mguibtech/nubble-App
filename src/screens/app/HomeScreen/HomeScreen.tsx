
import { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ListRenderItemInfo } from 'react-native';

import { Post, postService } from '@domain';

import { Box, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {

    const [postList, setPostList] = useState<Post[]>();

    useEffect(() => {
        postService.getPost().then(list => setPostList(list));
    }, []);

    function renderItem({ item }: ListRenderItemInfo<Post>) {
        return (

            <Box mb="s24">
                <Box flexDirection="row">
                    <Image source={{ uri: item.author.profileURL }} style={{ width: 32, height: 32 }} />
                    <Text>{item.author.userName}</Text>
                </Box>
                <Image source={{ uri: item.author.profileURL }} style={{ width: Dimensions.get('screen').width, height: 200 }} resizeMode="cover" />

            </Box>
        );
    }

    return (
        <Screen>
            <FlatList
                data={postList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </Screen>
    );
}
