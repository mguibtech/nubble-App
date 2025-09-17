import { useState } from 'react';
import { Keyboard } from 'react-native';

import { usePostCommentCreate } from '@domain';

import { TextMessage } from '@components';

interface Props {
    postId: number
}

export function PostCommentTextMessage({ postId }: Props) {

    const [message, setMessage] = useState('');
    const { createComment } = usePostCommentCreate(postId);

    async function onPressSend() {
        await createComment(message);
        setMessage('');
        Keyboard.dismiss();
    }


    return (
        <TextMessage
            value={message}
            onPressSend={onPressSend}
            onChangeText={setMessage}
            placeholder="Digite um comentário"
        />

    );
}
