import React, { forwardRef } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";


import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";
import { Box, TouchableOpacityBox } from "../Box/Box";
import { useAppTheme } from "../../hooks/useAppTheme";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";

interface ScreenProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
    photo?: boolean;
}

export const Screen = forwardRef<ScrollView, ScreenProps>(({ children, canGoBack = false, scrollable = false }, ref) => {
    const { top, bottom } = useAppSafeArea();
    const { colors } = useAppTheme();
    const navigation = useNavigation();

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <Container ref={ref} backgroundColor={colors.background}>
                <Box
                    paddingBottom="s24"
                    paddingHorizontal="s24"
                    style={{ paddingTop: top, paddingBottom: bottom }}
                    bg="background">
                    {canGoBack && (
                        <TouchableOpacityBox onPress={navigation.goBack} mb="s24" flexDirection="row" alignItems="center">
                            <Icon name="arrowLeft" color="primary" />
                            <Text preset="paragraphMedium" semibold ml="s8">Voltar</Text>
                        </TouchableOpacityBox>
                    )}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    )
});
