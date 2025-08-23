

import { Post } from '@domain';

import { Box } from '@components';

import { PostHeader } from './components/PostHeader';
import { PostImage } from './components/PostImage';

export interface PostItemProps {
    post: Post
}

export function PostItem({ post }: PostItemProps) {
    return (

        <Box mb="s24">
            <PostHeader post={post} />
            <PostImage post={post} />
        </Box>
    );
}
