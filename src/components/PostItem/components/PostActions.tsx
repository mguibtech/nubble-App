import { Post } from '@domain';

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>;

export function PostActions({ commentCount, favoriteCount, reactionCount }: Props) {

    function likePost() {
        //TODO: Implementar lógica de curtir post
        console.log('like post');
    }

    function navigateToComments() {
        //TODO: Implementar navegação para seção de comentários
        console.log('navigate to comments');
    }

    function favoritePost() {
        //TODO: Implementar lógica de favoritar post
        console.log('favorite post');
    }

    return (
        <Box flexDirection="row" mt="s16">
            <Item marked onPress={likePost} icon={{ default: 'heart', marked: 'heartFill' }} text={reactionCount} />
            <Item onPress={navigateToComments} icon={{ default: 'comment', marked: 'comment' }} text={commentCount} />
            <Item marked onPress={favoritePost} icon={{ default: 'bookmark', marked: 'bookmarkFill' }} text={favoriteCount} />
        </Box>
    );
}


interface ItemProps {
    onPress: () => void;
    marked?: boolean;
    icon: {
        default: IconProps['name'];
        marked: IconProps['name'];
    }
    text: number
}

function Item({ onPress, icon, marked, text }: ItemProps) {
    return (
        <TouchableOpacityBox flexDirection="row" alignItems="center" onPress={onPress} mr="s24">
            <Icon color={marked ? 'marked' : undefined} size={20} name={marked ? icon.marked : icon.default} />
            {text > 0 && (
                <Text ml="s4" bold preset="paragraphSmall">{text}</Text>
            )}
        </TouchableOpacityBox>
    );
}
