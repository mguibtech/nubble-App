import { Dimensions, Image } from 'react-native';

import { PostItemProps } from '../PostItem';

export function PostImage({ post }: PostItemProps) {
    return (
        <Image source={{ uri: post.author.profileURL }} style={{ width: Dimensions.get('screen').width, height: 200 }} resizeMode="cover" />

    );
}
