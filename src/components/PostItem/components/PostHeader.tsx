import { Image } from 'react-native';

import { Box, PostItemProps, Text } from '@components';

export function PostHeader({ post }: PostItemProps) {
    return (
        <Box flexDirection="row" alignItems="center" mb="s16">
            <Image source={{ uri: post.author.profileURL }} style={{ width: 32, height: 32, borderRadius: 14 }} />
            <Text ml="s12" preset="paragraphCaption" bold>{post.author.userName}</Text>
        </Box>
    );
}
