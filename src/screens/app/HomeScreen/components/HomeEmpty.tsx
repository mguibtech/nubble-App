
import { ActivityIndicator, Box, Button, Text } from '@components';

interface Props {
    loading: boolean;
    error: unknown
    refetch: () => void;
}


export function HomeEmpty({ loading, error, refetch }: Props) {

    let component = (
        <Text preset="paragraphMedium">Não á nenhuma publicação no seu feed</Text>
    );

    if (loading) {
        component = (
            <ActivityIndicator color="primary" />
        );
    }

    if (error) {
        component = (
            <>
                <Text bold>Não foi possível carregar lista de Posts</Text>
                <Button preset="outline" mt="s12" onPress={refetch} title="Recarregar" />
            </>
        );
    }

    return (
        < Box flex={1} justifyContent="center" alignItems="center" >
            {component}
        </Box >
    );
}

