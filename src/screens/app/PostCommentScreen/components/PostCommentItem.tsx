import { PostComment } from '@domain';

import { Box, ProfileAvatar, Text } from '@components';

interface Props {
    postComment: PostComment
}
export function PostCommentItem({ postComment }: Props) {
    return (
        <Box flexDirection="row" alignItems="center" gap="s12" mb="s16">
            <ProfileAvatar imageURL={postComment.author.profileUrl} />
            <Box>
                <Text preset="paragraphSmall" bold>{postComment.author.username}</Text>
                <Text preset="paragraphSmall" color="gray1">{postComment.message}</Text>
            </Box>
        </Box>
    );
}
