import React, { useRef } from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle,
} from 'react-native';

import { useAppTheme } from '../../hooks/useAppTheme';
import { theme } from '../../theme/theme';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';




export interface TextInputPros extends RNTextInputProps {
    label?: string;
    errorMessage?: string;
    rightComponent?: React.ReactElement;
    leftComponent?: React.ReactElement;
    boxProps?: BoxProps;
}

export function TextInput({
    label,
    errorMessage,
    rightComponent,
    leftComponent,
    boxProps,
    ...rNTextInputProps
}: TextInputPros) {
    const { colors } = useAppTheme();
    const inputRef = useRef<RNTextInput>(null);

    function focusInput() {
        inputRef.current?.focus();
    }

    const $textInputContainer: BoxProps = {
        height: 48,
        borderWidth: errorMessage ? 2 : 1,
        borderColor: errorMessage ? 'error' : 'gray3',
        paddingHorizontal: 's12',
        borderRadius: 's8',
        flexDirection: 'row',
        alignItems: 'center', // <- novo
        backgroundColor: 'grayWhite',
    };

    const $textInputStyle: TextStyle = {
        padding: 0,
        flexGrow: 1,
        flexShrink: 1,
        textAlign: rNTextInputProps.textAlign ?? 'left',
        textAlignVertical: 'center',
        color: theme.colors.gray1,
        fontFamily: $fontFamily.regular,
        ...$fontSizes.paragraphMedium,
    };

    return (
        <Box {...boxProps}>
            <Pressable onPress={focusInput}>
                <Text mb="s4" preset="paragraphMedium">
                    {label}
                </Text>
                <Box {...$textInputContainer}>
                    {leftComponent && (
                        <Box mr="s8" justifyContent="center">
                            {leftComponent}
                        </Box>
                    )}
                    <RNTextInput
                        autoCapitalize="none"
                        ref={inputRef}
                        placeholderTextColor={colors.gray2}
                        style={$textInputStyle}
                        {...rNTextInputProps}
                    />
                    {rightComponent && (
                        <Box ml="s16" justifyContent="center">
                            {rightComponent}
                        </Box>
                    )}
                </Box>
                {errorMessage && (
                    <Text preset="paragraphSmall" bold color="error">
                        {errorMessage}
                    </Text>
                )}
            </Pressable>
        </Box>
    );
}


