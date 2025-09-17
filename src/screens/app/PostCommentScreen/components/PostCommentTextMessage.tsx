import { useState } from 'react';
import { Keyboard } from 'react-native';

import { usePostCommentCreate } from '@domain';

import { TextMessage } from '@components';

interface Props {
    postId: number;
    onAddComment: () => void
}

export function PostCommentTextMessage({ postId, onAddComment }: Props) {

    const [message, setMessage] = useState('');
    const { createComment } = usePostCommentCreate(postId, {
        onSuccess: () => {
            onAddComment();
            setMessage('');
            Keyboard.dismiss();
        },
    });

    return (
        <TextMessage
            value={message}
            onPressSend={createComment}
            onChangeText={setMessage}
            placeholder="Digite um comentário"
        />

    );
}
