import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';

import { useUserGetById } from '@domain';

import { ActivityIndicator, Box, ProfileAvatar, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function ProfileScreen({ route }: AppScreenProps<'ProfileScreen'>) {
    const userId = route.params.userId;

    const { isLoading, isError, user, isFetching, refetch } = useUserGetById(userId);

    return (
        <Screen canGoBack flex={1}>
            {isLoading && <ActivityIndicator color="primary" />}
            {isError && <Text> error ao carregar perfil do usuário</Text>}
            {user && (
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
                    }
                    style={{ flex: 1 }}
                >

                    <Box alignItems="center">
                        <ProfileAvatar
                            imageURL={user.profileUrl}
                            size={64}
                            borderRadius={24}
                        />
                        <Text preset="headingMedium" bold>
                            {user.fullName}
                        </Text>
                        <Text>@{user.userName}</Text>
                    </Box>
                </ScrollView>
            )}
        </Screen>
    );
}
